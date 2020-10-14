import { markerDefault, onEachDot } from './markers.js';

// The first parameter are the coordinates of the center of the map
// The second parameter is the zoom level
var map = L.map('map').setView([42.362504, -71.083372], 13);

// Set coffee shop dataset to variable coffeeShops
// This is GeoJSON
var coffeeShops = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Dunkin Donuts",
                "address": "1 Broadway #1, Cambridge, MA 02142",
                "latitude": 42.362504,
                "longitude": -71.083372,
                "Colour": "#0000FF"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.083372, 42.362504]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Starbucks",
                "address": "6 Cambridge Center, Cambridge, MA 02142",
                "latitude": 42.363884,
                "longitude": -71.087749,
                "Colour": "#0000FF"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.087749, 42.363884]
            }
        }
    ]
};

// Functions to attach styles and popups to the marker layer


// function highlightDot(e) {
//     var layer = e.target;
//     layer.setStyle(markerHighlight);
// };

// function resetDotHighlight(e) {
//     var layer = e.target;
//     layer.setStyle(markerDefault);
// };

// function onEachDot(feature, layer) {
//     layer.on({
//         mouseover: highlightDot,
//         mouseout: resetDotHighlight
//     });
//     layer.bindPopup(
//     `<table style="width:150px">
//         <tbody>
//             <tr>
//                 <td>
//                     <div><b>${feature.properties.name}</b></div>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <div><b>${feature.properties.address}</b></div>
//                 </td>
//             </tr>
//         </tbody>
//     </table>`);
// };

// Displaying the data on the map

L.geoJson(coffeeShops, {
    style: function(feature) {
        return {color: feature.properties.Colour};
    },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, markerDefault);
    },
    onEachFeature: onEachDot
}).addTo(map);

// Init a map scale
L.control.scale().addTo(map);

// {s}, {z}, {x} and {y} are placeholders for map tiles
// {x} and {y} are the x/y of where you are on the map
// {z} is the zoom level
// {s} is the subdomain of cartodb
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

// Now add the layer onto the map
map.addLayer(layer);