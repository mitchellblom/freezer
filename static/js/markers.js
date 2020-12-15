// Defines map markers and their functions

const markerDefault = {
    radius: 8,
    weight: 2,
    opacity: 1,
    fillOpacity: 0.5
};

const markerHighlight = {
    radius: 10,
    weight: 3,
    opacity: 1,
    fillOpacity: 0.75
};

let highlightDot = (e) => {
    e.target.setStyle(markerHighlight);
};

let resetDotHighlight = (e) => {
    e.target.setStyle(markerDefault);
};

let onEachDot = (feature, layer) => {
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