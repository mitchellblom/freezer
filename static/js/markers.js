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
    // get article id from pin
    let articleId = e.target.feature.properties.article
    // highlight associated article in blogroll
    $(`.articleEntry[articleId="${articleId}"]`).addClass('article-pin-hover')
    e.target.setStyle(markerHighlight);
};

let resetDotHighlight = (e) => {
    // get article id from pin
    let articleId = e.target.feature.properties.article
    // un-highlight associated article in blogroll
    $(`.articleEntry[articleId="${articleId}"]`).removeClass('article-pin-hover')
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

export {highlightDot, markerDefault, onEachDot, resetDotHighlight}