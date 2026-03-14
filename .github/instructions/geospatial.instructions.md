---
applyTo: "src/**/map*,src/**/layer*,src/**/*geo*,src/**/*spatial*,src/**/*marker*,src/**/*poi*,src/**/*leaflet*"
---

# Expert Geospatial App Development Skill

Use this skill for **geospatial and map-heavy applications**: **Mapbox GL JS** and **Leaflet** for web, GeoJSON sources/layers, markers, popups, WMS/tile layers, and interactive events. Suited to dashboards, GIS tools, and location-based products.

## Stack overview

| Need | Mapbox GL JS | Leaflet |
|------|----------------|---------|
| Vector tiles, 3D, custom styles | ✓ | — |
| Simple 2D, WMS, lightweight | — | ✓ |
| GeoJSON | ✓ | ✓ |
| Markers / symbol layers | ✓ | ✓ |
| Popups, events | ✓ | ✓ |

- **Mapbox**: WebGL, vector tiles, strong styling; requires access token.
- **Leaflet**: Raster tiles, WMS, plugins; minimal setup; mobile-friendly.

## 1. Mapbox GL JS — setup and GeoJSON

- **Init**: `new mapboxgl.Map({ container, style: 'mapbox://styles/mapbox/streets-v11', center, zoom })`. Set `mapboxgl.accessToken` before use.
- **GeoJSON source**: `map.addSource('id', { type: 'geojson', data: featureCollection, generateId: true })`.
- **Circle layer**: `map.addLayer({ id, type: 'circle', source, paint: { 'circle-color', 'circle-radius', 'circle-stroke-width', 'circle-stroke-color' } })`.
- **Symbol layer**: `map.addLayer({ id, type: 'symbol', source, layout: { 'icon-image', 'text-field': ['get', 'title'], 'text-font', 'text-offset', 'text-anchor' } })`.
- **Bounds**: Use `bounds: [[west, south], [east, north]]` in map options to fit a region.

## 2. Mapbox — interactivity

- **Popup on click/hover**: Listen to layer `click` or `mouseenter`/`mouseleave`; create `new mapboxgl.Popup()`, set `.setLngLat()`, `.setHTML()` or `.setDOMContent()`, `.addTo(map)`.
- **Feature state**: Use `map.setFeatureState({ source, id }, { hover: true })` and reference in layer paint/layout with `['feature-state', 'hover']` for hover/selection styling.
- **Custom markers**: Create DOM element, `new mapboxgl.Marker(el).setLngLat(coords).addTo(map)`; add click/keydown for a11y.
- **Cleanup**: Remove listeners and popups on unmount; call `map.remove()` when destroying the map.

## 3. Leaflet — setup and layers

- **Init**: `L.map('map', { crs: L.CRS.EPSG4326 })` (or default). Set view: `setView([lat, lng], zoom)` or `fitBounds(bounds)`.
- **Tile layer**: `L.tileLayer(urlTemplate, options).addTo(map)`.
- **WMS**: `L.tileLayer.wms(baseUrl, { layers: 'name', format: 'image/png', transparent: true }).addTo(map)`. CRS: Leaflet supports CRS.EPSG3857, CRS.EPSG3395, CRS.EPSG4326; for other CRS consider Proj4Leaflet.
- **GeoJSON**: `L.geoJSON(geojson, { onEachFeature, style }).addTo(map)`.

## 4. Leaflet — GeoJSON and events

- **onEachFeature**: Bind popups and events per feature, e.g. `if (feature.properties.popupContent) layer.bindPopup(feature.properties.popupContent)`.
- **Fit bounds**: `geojsonLayer.getBounds()` then `map.fitBounds(geojson.getBounds())`.
- **Events**: Layers fire `click`, `dblclick`, `mouseover`, `mouseout`, `contextmenu`; use `layer.on({ mouseover: highlight, mouseout: reset, click: zoomTo })` for interactivity.
- **Popup/tooltip**: `layer.bindPopup(content)` or `bindTooltip(content)`; events `popupopen`, `popupclose`, `tooltipopen`, `tooltipclose`.

## 5. Senior practices

- **Token security**: Never commit Mapbox tokens; use env vars or backend proxy for sensitive apps.
- **Performance**: For many points, use symbol/circle layers with GeoJSON (or clustering) rather than hundreds of DOM markers.
- **Accessibility**: Custom markers: keyboard support (Enter/Space), aria-label; ensure popup content is focusable and announced.
- **CRS**: Match map CRS to your data (e.g. GeoJSON is WGS84); use same CRS for WMS when possible.
- **Cleanup**: Remove map instance and listeners on route change or component unmount to avoid leaks.

## Reference — Mapbox GeoJSON + circle layer

```javascript
map.addSource('places', {
  type: 'geojson',
  generateId: true,
  data: { type: 'FeatureCollection', features: [...] }
});
map.addLayer({
  id: 'places',
  type: 'circle',
  source: 'places',
  paint: {
    'circle-color': '#4264fb',
    'circle-radius': 6,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff'
  }
});
```

## Reference — Mapbox Symbol layer with custom image

```javascript
map.addSource('points', { type: 'geojson', data: {...} });
map.addLayer({
  id: 'points',
  type: 'symbol',
  source: 'points',
  layout: {
    'icon-image': 'custom-marker',
    'text-field': ['get', 'title'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 1.25],
    'text-anchor': 'top'
  }
});
```

## Reference — Leaflet GeoJSON with popups and events

```javascript
function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
  layer.on({ mouseover: highlightFeature, mouseout: resetHighlight, click: zoomToFeature });
}
L.geoJSON(data, { style: style, onEachFeature: onEachFeature }).addTo(map);
map.fitBounds(geojson.getBounds());
```

## Reference — Leaflet WMS

```javascript
var map = L.map('map', { crs: L.CRS.EPSG4326 });
var wms = L.tileLayer.wms('http://example.com/geoserver/wms?', {
  layers: 'layerName',
  format: 'image/png',
  transparent: true
}).addTo(map);
```

## Quick reference

| Need | Mapbox | Leaflet |
|------|--------|---------|
| Add GeoJSON | addSource('geojson', { type: 'geojson', data }) + addLayer | L.geoJSON(data, { onEachFeature, style }).addTo(map) |
| Markers | addLayer type 'symbol' or Marker(el) | L.marker(latLng).addTo(map) |
| Popup | new Popup().setLngLat().setHTML().addTo(map) | layer.bindPopup(content) |
| WMS | — | L.tileLayer.wms(url, { layers, format, transparent }) |
| Hover/click | setFeatureState + paint condition; map.on('click', layerId) | layer.on('mouseover'/'click', handler) |
| Bounds | map.fitBounds([[w,s],[e,n]]) | map.fitBounds(bounds) |
