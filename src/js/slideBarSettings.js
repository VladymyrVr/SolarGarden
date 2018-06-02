$( document ).ready(function() {
    $('.js-toggle-main-menu').click(function () {
        $(this).hide();
        $('#responsive-menu').css('width','100px');
    });

    $('.closebtn').click(function () {
        $('#responsive-menu').css('width','0');
        $('.js-toggle-main-menu').show();
    })
});