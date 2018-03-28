$(document).ready(function () {

    var h = $(window).height();
    $(window).scroll(function () {
        if (($(this).scrollTop() + h) >= $("#header-company").offset().top) {
            $("#header-company h2").css({visibility: "visible"});
            $("#header-company h2").addClass('animated zoomIn');
        }
        if (($(this).scrollTop() + h) >= $("#animate-contact-wrapper").offset().top) {
            $("#animate-contact-wrapper li").css({visibility: "visible"});
            $("#animate-contact-wrapper li").addClass('animated zoomIn');


        }
        if (($(this).scrollTop() + h) >= $("#animate-contact-wrapper-2").offset().top) {
            $("#animate-contact-wrapper-2 li").css({visibility: "visible"});
            $("#animate-contact-wrapper-2 li").eq(0).addClass('animated zoomIn');
            $("#animate-contact-wrapper-2 li").eq(1).addClass('animated zoomIn');
            $("#animate-contact-wrapper-2 li").eq(2).addClass('animated zoomIn');
            $("#animate-contact-wrapper-2 li").eq(3).addClass('animated zoomIn');

        }

        if (($(this).scrollTop() + h) >= $("#text-animation").offset().top) {
            $("#text-animation p").css({visibility: "visible"});
            $("#text-animation p").addClass('animated zoomIn');
        }

        if (($(this).scrollTop() + h) >= $(".first-step").offset().top) {
            $(".first-step").css({visibility: "visible"});
            $(".first-step").addClass('animated bounceInRight');
        }

        if (($(this).scrollTop() + h) >= $(".second-step").offset().top) {
            $(".second-step").css({visibility: "visible"});
            $(".second-step").addClass('animated bounceInLeft');
        }

        if (($(this).scrollTop() + h) >= $(".third-step").offset().top) {
            $(".third-step").css({visibility: "visible"});
            $(".third-step").addClass('animated bounceInRight');
        }

        if (($(this).scrollTop() + h) >= $(".fourth-step").offset().top) {
            $(".fourth-step").css({visibility: "visible"});
            $(".fourth-step").addClass('animated bounceInLeft');
        }

        if (($(this).scrollTop() + h) >= $(".fifth-step").offset().top) {
            $(".fifth-step").css({visibility: "visible"});
            $(".fifth-step").addClass('animated bounceInRight');
        }

        if (($(this).scrollTop() + h) >= $(".sixth-step").offset().top) {
            $(".sixth-step").css({visibility: "visible"});
            $(".sixth-step").addClass('animated bounceInLeft');
        }

        if (($(this).scrollTop() + h) >= $(".seventh-step").offset().top) {
            $(".seventh-step").css({visibility: "visible"});
            $(".seventh-step").addClass('animated bounceInRight');
        }

        if (($(this).scrollTop() + h) >= $(".eigth-step").offset().top) {
            $(".eigth-step").css({visibility: "visible"});
            $(".eigth-step").addClass('animated bounceInLeft');
        }


    });
});