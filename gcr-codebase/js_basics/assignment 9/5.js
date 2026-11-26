
$(document).ready(function () {

    // Highlight all direct reports of a manager
    $(".manager").click(function () {

        let department = $(this).parent();

        department.find(".employee")
            .not(this)
            .toggleClass("highlight");

    });

    // Show contact information using next()
    $(".employee").hover(
        function () {
            $(this).next(".contact").show();
        },
        function () {
            $(this).next(".contact").hide();
        }
    );

    // Highlight all employees in a department using children()
    $(".department h2").click(function () {

        $(this).parent()
            .children(".employee")
            .css("background-color", "lightblue");

    });

    // Select a random employee and highlight siblings
    $("#random").click(function () {

        let employees = $(".employee").not(".manager");

        let randomIndex = Math.floor(Math.random() * employees.length);

        let selected = employees.eq(randomIndex);

        selected.siblings(".employee").addClass("highlight");

    });

    // Collapse team using parent() and find()
    $("#collapse").click(function () {

        $(".department").each(function () {
            $(this).find(".employee, .contact").hide();
        });

    });

    // Expand team
    $("#expand").click(function () {

        $(".department").each(function () {
            $(this).find(".employee").show();
        });

    });

});
