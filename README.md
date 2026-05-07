# History Explorer

History Explorer is an interactive browser app for exploring historical events, state formation, regime changes, boundary changes, and major voyages on a 3D globe.

![History Explorer screenshot](./screenshot.png)

## Features

- Rotatable and zoomable 3D Earth powered by Three.js and Globe.gl
- Country polygons and border overlays on the globe
- Timeline from `2000 BC` through `2026`
- One-year step controls with `-` and `+` buttons
- Event filters for wars, politics, people, and voyages
- Nearby-event selection sorted by closeness to the selected year
- Visible event list capped at 20 items
- Clickable event cards that jump the timeline to the event year and center the globe on the event
- Hover tooltips on globe markers
- Event tooltip images from Wikidata/Wikimedia Commons where available
- Animated voyage paths and active voyage position markers
- Boundary-change panel for nearby political boundary changes
- Curated event source labels shown in the UI

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

- `2,333` historical events
- `262` curated in-app events
- `2,071` generated supplemental events from Wikidata
- `732` supplemental events with related image URLs
- curated voyage routes for explorers, expeditions, and organized travel
- selected modern boundary-change records

Events include source labels based on references such as Britannica, World History Encyclopedia, HISTORY, and Wikidata. The event data is intended for interactive exploration rather than exhaustive academic coverage.

To regenerate the supplemental dataset:

```sh
curl -L -H 'Accept: application/sparql-results+json' --data-urlencode query@scripts/wikidata-events.rq https://query.wikidata.org/sparql -o wikidata-events.raw.json
node scripts/build-supplemental-events.js wikidata-events.raw.json supplemental-events.json
```

## Interaction Notes

- Move the slider to select a year.
- Use `-` and `+` to step one year at a time.
- Click an event card to center the globe and advance the timeline to that event.
- Hover globe markers to see event details.
- Select `Voyages` to focus on route paths.

## Implementation Notes

This is a static frontend app with no build step. It relies on:

- Three.js
- Globe.gl
- D3 geo helpers
- TopoJSON client
- World Atlas country data
