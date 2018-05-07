$(document).ready(function () {

    var iframeSrc = $('iframe').attr('src');

    $('.play-video').click(function (ev) {
        $(this).parent('.video-review').find('.video')[0].src = iframeSrc += '&autoplay=1&rel=0';
        $(this).parent('.video-review').find('.video-review-block').css('display', 'block');
        ev.preventDefault();


    });

    $('.close-video').click(function () {
        $(this).parents('.video-review').find('.video-review-block').css('display', 'none');
        $('iframe').attr('src', $('iframe').attr('src', iframeSrc));
    });

    var video = document.getElementsByClassName('video-review-content');

    window.onclick = function (event) {
        if (event.target !== video) {
            $(this).parent('.video-review-block').css('display', 'none')
        }
    }
});