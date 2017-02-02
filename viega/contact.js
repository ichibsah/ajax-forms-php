$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

           $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }

            })
            		.done(function (data) {
            		    $('#form-content').fadeOut('slow', function () {
            		        $('#form-content').fadeIn('slow').html(data);
            		    });
            		})
		.fail(function () {
		    alert('Ajax Submit Failed ...');
		});

            return false;
        }
    })
});