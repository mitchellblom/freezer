// The first parameter are the coordinates of the center of the map
// The second parameter is the zoom level
var map = L.map('map').setView([42.362504, -71.083372], 10);

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
                "longitude": -71.083372
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
                "longitude": -71.087749
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.087749, 42.363884]
            }
        }
    ]
};

// add coffee shop GeoJSON to map as layer
L.geoJson(coffeeShops, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
}).addTo(map);

// L.marker([41.712, -74.006]).addTo(map)
//     .bindPopup(`<strong>Pin One</strong>`).openPopup();

// {s}, {z}, {x} and {y} are placeholders for map tiles
// {x} and {y} are the x/y of where you are on the map
// {z} is the zoom level
// {s} is the subdomain of cartodb
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

// Now add the layer onto the map
map.addLayer(layer);