
$(document).ready(function () {

    // Filter courses whenever the user types
    $("#search").keyup(function () {

        let value = $(this).val().toLowerCase();

        let count = 0;

        $(".course").each(function () {

            let courseName = $(this).text().toLowerCase();

            // Check if course matches search
            if (courseName.includes(value)) {

                $(this).show();

                count++;

                // Highlight matching course
                $(this).css({
                    "background-color": "yellow",
                    "font-weight": "bold"
                });

            }
            else {

                $(this).hide();

            }

        });

        // Display number of matched courses
        $("#count").text("Matching Courses: " + count);

    });

    // Clear search and reset course list
    $("#clear").click(function () {

        $("#search").val("");

        $(".course").show();

        $(".course").css({
            "background-color": "white",
            "font-weight": "normal"
        });

        $("#count").text("Total Courses: " + $(".course").length);

    });

});
