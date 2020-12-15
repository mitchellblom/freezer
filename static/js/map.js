import { markerDefault, onEachDot } from '../js/markers.js';
import pinsGeoJson from '../pinsGeoJson.js'

let firstPinProps = pinsGeoJson.features[0].properties
let defaultCoords = [firstPinProps.latitude, firstPinProps.longitude]
let defaultZoom = 13
let map = L.map('map', {
        preferCanvas: true
    }).setView(defaultCoords, defaultZoom);

// Display pinsGeoJson data on the map
let pinsLayer = L.geoJson(pinsGeoJson, {
    style: function(feature) {
        return {color: feature.properties.Colour};
    },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, markerDefault);
    },
    onEachFeature: onEachDot
})

map.addLayer(pinsLayer)

// {s}, {z}, {x} and {y} are placeholders for map tiles
// {x} and {y} are the x/y of where you are on the map
// {z} is the zoom level
// {s} is the subdomain of cartodb
let titleLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

map.addLayer(titleLayer);

// Toggle Pins
$("#togglePinsButton").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(pinsLayer)) {
        $(this).removeClass('selected');
        map.removeLayer(pinsLayer);
    } else {
        map.addLayer(pinsLayer);        
        $(this).addClass('selected');
   }
});