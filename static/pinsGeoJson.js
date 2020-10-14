const pinsGeoJson = {
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

export { pinsGeoJson }