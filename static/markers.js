// Defines map markers and their functions

var markerDefault = {
    radius: 8,
    weight: 2,
    opacity: 1,
    fillOpacity: 0.5
};

var markerHighlight = {
    radius: 10,
    weight: 3,
    opacity: 1,
    fillOpacity: 0.75
};

function highlightDot(e) {
    var layer = e.target;
    layer.setStyle(markerHighlight);
};

function resetDotHighlight(e) {
    var layer = e.target;
    layer.setStyle(markerDefault);
};

function onEachDot(feature, layer) {
    layer.on({
        mouseover: highlightDot,
        mouseout: resetDotHighlight
    });
    layer.bindPopup(
    `<table style="width:150px">
        <tbody>
            <tr>
                <td>
                    <div><b>${feature.properties.name}</b></div>
                </td>
            </tr>
            <tr>
                <td>
                    <div><b>${feature.properties.address}</b></div>
                </td>
            </tr>
        </tbody>
    </table>`);
};

export {markerDefault, onEachDot}