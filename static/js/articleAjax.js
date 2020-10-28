// Create listener for article click.
// Show the welcome article by default.
window.onload = function () {
    showArticle('welcome')
    $('.articleLink').click(function(e) {
        showArticle(e.target.name)
    });
};

// Get and display partial template for given articleName
let showArticle = (articleName) => {
    $.ajax(`${articleName}.html`).done(function (cb) {
        $('#article').html(cb);
    });
}