
$(document).ready(function () {

    // Version 2: Manage modal notifications
    $("#notification").click(function () {
        $("#modal").fadeIn();
    });

    $("#close").click(function () {
        $("#modal").fadeOut();
    });

    // Version 2: Attach tooltip on hover
    $("h2[title]").hover(
        function () {
            alert($(this).attr("title"));
        }
    );

});

// Version 1: Carousel rotation
jq1(document).ready(function () {

    let slide = 1;

    setInterval(function () {

        slide++;

        if (slide > 5) {
            slide = 1;
        }

        jq1("#slide").text("Slide " + slide);

    }, 2000);

    // Version 1: Highlight active widget
    jq1(".widgetButton").click(function () {

        jq1(".widgetButton").removeClass("active");

        jq1(this).addClass("active");

    });

});
