window.onload = function () {
    $('.articleToShow').click(function(e) {
        $.ajax(`${e.target.name}.html`).done(function (reply) {
            $('#articleFromAjax').html(reply);
        });
    });
};