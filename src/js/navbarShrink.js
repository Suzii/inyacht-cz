$(window).scroll(function () {
    if ($(document).scrollTop() > 80) {
        $('nav').addClass('navbar-shrink');
    }
    else {
        $('nav').removeClass('navbar-shrink');
    }
});
