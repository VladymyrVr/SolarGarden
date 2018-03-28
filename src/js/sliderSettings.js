$(document).ready(function () {
    $('.welcome-message').slick({
        infinite: true,
        dots: false,
        arrows: false,
        accessibility: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });

    $('.service-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
               breakpoint: 1210,
               settings: {
                   arrows: false
               }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false

                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});