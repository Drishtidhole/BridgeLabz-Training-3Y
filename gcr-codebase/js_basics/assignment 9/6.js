
$(document).ready(function () {

    // Function to display success message
    function showMessage(message) {
        $("#message").text(message);
    }

    // Subscribe using event delegation
    $("#topics").on("click", ".subscribe", function () {

        $(this).text("Subscribed").prop("disabled", true);

        showMessage("Successfully subscribed!");

    });

    // Unsubscribe
    $("#topics").on("click", ".unsubscribe", function () {

        $(this).siblings(".subscribe")
            .text("Subscribe")
            .prop("disabled", false);

        showMessage("Successfully unsubscribed!");

    });

    // Add new topic dynamically
    $("#addTopic").click(function () {

        let topic = $("#newTopic").val();

        if (topic.trim() === "") {
            alert("Please enter a topic");
            return;
        }

        let newElement = `
            <div class="topic">
                ${$("<div>").text(topic).html()}
                <button class="subscribe">Subscribe</button>
                <button class="unsubscribe">Unsubscribe</button>
                <button class="remove">Remove</button>
            </div>
        `;

        $("#topics").append(newElement);

        showMessage("New topic added!");

        $("#newTopic").val("");

    });

    // Remove topic and detach its event handlers
    $("#topics").on("click", ".remove", function () {

        let topic = $(this).parent();

        topic.off("click");

        topic.remove();

        showMessage("Topic removed!");

    });

});
