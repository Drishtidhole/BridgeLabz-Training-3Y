
$(document).ready(function () {

    // Get current hour
    let hour = new Date().getHours();

    // Display greeting according to time
    if (hour < 12) {
        $("#greeting").text("Good Morning, Drishti!");
    }
    else if (hour < 17) {
        $("#greeting").text("Good Afternoon, Drishti!");
    }
    else {
        $("#greeting").text("Good Evening, Drishti!");
    }

    // Change greeting to motivational quote
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and keep growing!");

        alert("Your greeting has been changed!");
    });

    // Toggle welcome message visibility
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Show alert when greeting is clicked
    $("#greeting").click(function () {
        alert("Welcome! Have a wonderful day.");
    });

});
