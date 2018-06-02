$(document).ready(function () {

    $('.play-video').click(function (ev) {
        $(this).parent('.video-review').find('.video-review-block').css('display', 'block');
        $(this).parent('.video-review').find('.video')[0].src += '?&rel=0&autoplay=1';
        ev.preventDefault();


    });

    $('.close-video').click(function () {
        var videoUrl =  $(this).parents('.video-review').find('.video').prop('src');
        videoUrl = videoUrl.replace('&autoplay=1', '');
        $(this).parents('.video-review').find('.video-review-block').css('display', 'none');
        $(this).parents('.video-review').find('.video').prop('src', '');
        $(this).parents('.video-review').find('.video').prop('src', videoUrl);

    });
});