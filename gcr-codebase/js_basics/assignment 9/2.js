
$(document).ready(function () {

    // Highlight product when clicked
    $(".product").click(function () {
        $(this).toggleClass("highlight");
    });

    // Show product details on hover
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // Toggle favorite selection
    $(".favorite").click(function (event) {

        // Prevent parent product click event
        event.stopPropagation();

        $(this).toggleClass("selected");
    });

    // Check stock using data attribute
    $(".product").click(function () {

        let stock = $(this).attr("data-stock");

        if (stock === "no") {
            alert("Sorry! This product is out of stock.");
        }

    });

});
