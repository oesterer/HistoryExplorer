const fs = require("fs");

const inputPath = process.argv[2] || "wikidata-events.raw.json";
const outputPath = process.argv[3] || "supplemental-events.json";
const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const curated = readCuratedIds();
const seen = new Set(curated);
const events = [];

for (const row of raw.results.bindings) {
  const id = wikidataId(row.event?.value);
  const label = row.eventLabel?.value?.trim();
  const date = row.date?.value;
  const coord = row.coord?.value;

  if (!id || !label || !date || !coord) continue;

  const eventId = `wikidata-${id}`;
  if (seen.has(eventId)) continue;

  const year = decimalYear(date);
  if (!Number.isFinite(year) || year < -2000 || year > 2026) continue;

  const point = parsePoint(coord);
  if (!point) continue;

  const description = cleanDescription(row.eventDescription?.value);
  const typeLabel = row.typeLabel?.value || "";
  if (isNoisyNonHistoricalRecord(`${label} ${description} ${typeLabel}`)) continue;

  const event = {
    id: eventId,
    title: label,
    year,
    lat: round(point.lat, 5),
    lng: round(point.lng, 5),
    category: categoryFor(`${label} ${description} ${typeLabel}`),
    summary: description || `Historical event recorded in Wikidata as ${typeLabel || "an event"}.`,
    source: "wikidata",
    sourceUrl: `https://www.wikidata.org/wiki/${id}`,
  };

  const imageUrl = normalizedImageUrl(row.image?.value);
  if (imageUrl) {
    event.imageUrl = imageUrl;
  }

  seen.add(eventId);
  events.push(event);
}

events.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
fs.writeFileSync(outputPath, `${asciiJson(events)}\n`);
console.log(JSON.stringify({ count: events.length, outputPath }, null, 2));

function wikidataId(value) {
  const match = value?.match(/\/entity\/(Q\d+)$/);
  return match?.[1] || null;
}

function parsePoint(value) {
  const match = value.match(/^Point\(([-\d.]+) ([-\d.]+)\)$/);
  if (!match) return null;
  return {
    lng: Number(match[1]),
    lat: Number(match[2]),
  };
}

function decimalYear(value) {
  const match = value.match(/^(-?\d+)-(\d{2})-(\d{2})/);
  if (!match) return NaN;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  return round(year + (month - 1) / 12 + (day - 1) / 365, 3);
}

function categoryFor(text) {
  const lower = text.toLowerCase();
  if (/\b(battle|war|siege|massacre|invasion|rebellion|revolt|riot|uprising|conflict|bombing|attack|campaign)\b/.test(lower)) {
    return "conflict";
  }
  if (/\b(election|referendum|revolution|coup|treaty|constitution|independence|republic|empire|kingdom|state|government|annexation|protest|declaration|founding)\b/.test(lower)) {
    return "politics";
  }
  if (/\b(voyage|expedition|mission|flight|journey|exploration|landing|launch)\b/.test(lower)) {
    return "voyage";
  }
  return "people";
}

function isNoisyNonHistoricalRecord(text) {
  const lower = text.toLowerCase();
  return /\b(solar eclipse|lunar eclipse|annular eclipse|partial eclipse|total eclipse|occultation|meteor shower|comet perihelion)\b/.test(lower);
}

function normalizedImageUrl(value) {
  if (!value) return "";
  if (/^http:\/\/commons\.wikimedia\.org\//i.test(value)) {
    return value.replace(/^http:\/\//i, "https://");
  }
  if (/^https:\/\/.+/i.test(value)) return value;
  return "";
}

function cleanDescription(value) {
  if (!value) return "";
  return value
    .replace(/\s+/g, " ")
    .replace(/\.$/, "")
    .trim();
}

function round(value, places) {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

function asciiJson(value) {
  return JSON.stringify(value, null, 2).replace(/[^\x00-\x7F]/g, (char) => {
    const code = char.codePointAt(0).toString(16).padStart(4, "0");
    return `\\u${code}`;
  });
}

function readCuratedIds() {
  const source = fs.readFileSync("app.js", "utf8");
  const matches = source.matchAll(/id:\s*"([^"]+)"/g);
  return new Set(Array.from(matches, (match) => match[1]));
}
