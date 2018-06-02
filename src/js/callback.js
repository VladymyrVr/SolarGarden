$(document).ready(function () {
    $("#phone-field").mask("+38(999) 999-99-99");

    $('.call-button').click(function () {
        $('.modal-callback').css('display', 'block')
    })

    $('.close-button').click(function () {
        $('.modal-callback').css('display', 'none')
    });

    var modal = document.getElementById('modal-call');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.css('display', 'none');
        }
    };

        $("#callback").submit(function() {
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "../backend/mail.php",
                data: th.serialize()
            }).done(function() {
                alert("Мы передзвоним вам в ближайшее время!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

});