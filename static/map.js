import { markerDefault, onEachDot } from './markers.js';
import { pinsGeoJson } from './pinsGeoJson.js'

let firstPinProps = pinsGeoJson.features[0].properties
let defaultCoords = [firstPinProps.latitude, firstPinProps.longitude]
let defaultZoom = 13
let map = L.map('map').setView(defaultCoords, defaultZoom);

// Display pinsGeoJson data on the map
L.geoJson(pinsGeoJson, {
    style: function(feature) {
        return {color: feature.properties.Colour};
    },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, markerDefault);
    },
    onEachFeature: onEachDot
}).addTo(map);

// {s}, {z}, {x} and {y} are placeholders for map tiles
// {x} and {y} are the x/y of where you are on the map
// {z} is the zoom level
// {s} is the subdomain of cartodb
let titleLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

map.addLayer(titleLayer);