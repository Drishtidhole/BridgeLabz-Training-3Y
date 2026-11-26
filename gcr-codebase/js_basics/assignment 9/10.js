
$(document).ready(function () {

    // Store already registered emails
    let registeredEmails = [
        "test@gmail.com",
        "admin@gmail.com"
    ];

    $("#registrationForm").submit(function (event) {

        // Prevent page reload
        event.preventDefault();

        let name = $("#name").val().trim();

        let email = $("#email").val().trim();

        let password = $("#password").val();

        let valid = true;

        // Reset previous styles
        $("input").css("border", "1px solid gray");

        $("#message").text("");

        // Validate name
        if (name === "") {

            $("#name").css("border", "2px solid red");

            valid = false;

        }

        // Validate email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            $("#email").css("border", "2px solid red");

            valid = false;

        }

        // Check email uniqueness
        else if (registeredEmails.includes(email.toLowerCase())) {

            $("#email").css("border", "2px solid red");

            valid = false;

            $("#message").text("Email is already registered.");

        }

        // Validate password length
        if (password.length < 8) {

            $("#password").css("border", "2px solid red");

            valid = false;

        }

        // Display success message
        if (valid) {

            $("#message").text("Registration Successful!");

            registeredEmails.push(email.toLowerCase());

            $("#registrationForm")[0].reset();

        }
        else {

            if ($("#message").text() === "") {
                $("#message").text("Please correct the highlighted fields.");
            }

        }

    });

});
