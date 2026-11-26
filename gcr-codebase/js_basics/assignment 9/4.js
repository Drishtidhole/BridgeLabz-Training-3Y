
$(document).ready(function () {

    // Hide first banner
    $("#hide").click(function () {
        $(".banner:first").hide();
    });

    // Show all banners
    $("#show").click(function () {
        $(".banner").show();
    });

    // Slide up all banners
    $("#slideUp").click(function () {
        $(".banner").slideUp();
    });

    // Slide down all banners
    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });

    // Fade in banners
    $("#fadeIn").click(function () {
        $(".banner").fadeIn();
    });

    // Fade out banners
    $("#fadeOut").click(function () {
        $(".banner").fadeOut();
    });

    // Automatically rotate banners every 5 seconds
    let current = 0;

    $(".banner").hide().first().show();

    setInterval(function () {

        $(".banner").eq(current).fadeOut(500);

        current = (current + 1) % $(".banner").length;

        $(".banner").eq(current).fadeIn(500);

    }, 5000);

});
