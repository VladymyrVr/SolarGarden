$(document).ready(function($) {
    setTimeout(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    }, 1000);
});
$(window).load(function() {
    var Body = $('body');
    Body.addClass('preloader-site');
});