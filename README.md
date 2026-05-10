# History Explorer

History Explorer is an interactive browser app for exploring historical events, state formation, regime changes, boundary changes, and major voyages on a 3D globe.

![History Explorer screenshot](./screenshot.png)

## Features

- Rotatable and zoomable 3D Earth powered by Three.js and Globe.gl
- Country polygons and border overlays on the globe
- Timeline from `2000 BC` through `2026`
- Timeline jump controls with `<<` and `>>` buttons that move to the previous or next event, voyage, or map-change year
- Event filters for wars, politics, people, and voyages
- Nearby-event selection sorted by closeness to the selected year
- Visible event list capped at 20 items
- Clickable event cards that jump the timeline to the event year and center the globe on the event
- Hover tooltips on globe markers with article, video, and direct source links
- Event tooltip images from Wikidata/Wikimedia Commons where available
- Animated voyage paths and active voyage position markers
- Boundary changes treated as normal political events in the visible event list and globe marker layer
- Curated event source labels and clickable source links shown in the UI

## Project Structure

- `index.html` - app markup and CDN script loading
- `styles.css` - layout, timeline, sidebar, event card, and responsive styling
- `app.js` - event data, voyage data, globe setup, filtering, timeline behavior, and interactions
- `supplemental-events.json` - generated Wikidata-backed event dataset loaded at runtime
- `screenshot.png` - current app screenshot used in this README
- `favicon.svg` - browser favicon matching the globe/timeline visual theme
- `scripts/wikidata-events.rq` - SPARQL query used to fetch supplemental events
- `scripts/build-supplemental-events.js` - converter for Wikidata SPARQL JSON into app event records

## Run Locally

Serve the project over HTTP from the project root:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

The app uses CDN-hosted runtime assets and fetches world atlas data at runtime, so opening `index.html` directly from the filesystem is not recommended.

## Data

The app currently contains:

- `2,338` historical events
- `262` curated in-app events
- `5` modern boundary-change event records
- `2,071` generated supplemental events from Wikidata
- `732` supplemental events with related image URLs
- curated voyage routes for explorers, expeditions, and organized travel
- `24` timeline-driven historical boundary overlay families, including Rome, the Mongols, WWII Germany/Japan, Alexander, Achaemenid Persia, Chinese dynasties, Islamic caliphates, Ottoman, British, Spanish, Portuguese, Napoleonic, Russian/Soviet, U.S. expansion, Inca, Aztec, Mughal, British India, Colonial Africa, Yugoslavia, Germany, Arab-Israeli changes, and the European Union

Events include source labels and links based on references such as Britannica, World History Encyclopedia, HISTORY, and Wikidata. Tooltips also provide per-event article and YouTube search links so related reading and video material is reachable from the globe.

## Historical Boundary Overlays

The globe includes timeline-driven historical boundary overlays that appear when the selected year falls within the relevant period. Hovering over an overlay shows the snapshot title, year, and context.

Included overlay families:

- Roman Empire
- Mongol Empire
- German conquests in World War II
- Japanese conquests in World War II
- Alexander's Empire
- Achaemenid Persian Empire
- Han, Tang, and Qing China snapshots
- Islamic Caliphates
- Ottoman Empire
- British Empire
- Spanish Empire
- Portuguese Empire
- Napoleonic France
- Russian Empire and Soviet Union
- United States territorial expansion
- Inca Empire
- Aztec Triple Alliance
- Mughal Empire
- British India, Partition, and Bangladesh
- Colonial Africa, Scramble for Africa, and decolonization
- Yugoslavia breakup
- German unification, division, and reunification
- Arab-Israeli territorial changes
- European Union expansion

These overlays are approximate visual extents designed for exploration. They are not survey-accurate borders and should not be treated as formal historical GIS data.

To regenerate the supplemental dataset:

```sh
curl -L -H 'Accept: application/sparql-results+json' --data-urlencode query@scripts/wikidata-events.rq https://query.wikidata.org/sparql -o wikidata-events.raw.json
node scripts/build-supplemental-events.js wikidata-events.raw.json supplemental-events.json
```

## Interaction Notes

- Move the slider to select a year.
- Use `<<` and `>>` to jump to the previous or next year that contains an event, voyage change, boundary change, or historical overlay snapshot.
- Click an event card to center the globe and advance the timeline to that event.
- Hover globe markers to see event details, images where available, and source links.
- Select `Voyages` to focus on route paths.

## Implementation Notes

This is a static frontend app with no build step. It relies on:

- Three.js
- Globe.gl
- D3 geo helpers
- TopoJSON client
- World Atlas country data
