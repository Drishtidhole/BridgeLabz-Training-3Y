
$(document).ready(function () {

    // Show or hide answer when question is clicked
    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    // Change question color on hover
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // Collapse all answers on double click
    $(".question").dblclick(function () {
        $(".answer").hide();
    });

    // Highlight parent FAQ when input gets focus
    $("input").focus(function () {
        $(this).parent().css("background-color", "lightyellow");
    });

    // Reset parent background when input loses focus
    $("input").blur(function () {
        $(this).parent().css("background-color", "white");
    });

});
