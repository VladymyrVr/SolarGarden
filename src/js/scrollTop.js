$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});