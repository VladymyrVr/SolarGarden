$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1200) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

});