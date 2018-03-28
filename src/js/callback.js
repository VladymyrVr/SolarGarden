$(document).ready(function () {
    $("#phone-field").mask("+38(999) 999-99-99");

    $('.call-button').click(function () {
        $('.modal-callback').css('display', 'block')
    })

    $('.close-button').click(function () {
        $('.modal-callback').css('display', 'none')
    })

    var modal = document.getElementById('modal-call');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});