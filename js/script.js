$('ul.nav li.active').hover(function () {
    $('div.collapse').toggleClass('show')
});

$(document).click(function (e) {
    if (!$(e.target).is('.drpdown')) {
        $('.collapse').collapse('hide');
    }
});