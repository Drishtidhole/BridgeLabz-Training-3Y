const themeButtons = document.querySelectorAll("button");

themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const theme = button.getAttribute("data-choice");

        document.body.setAttribute("class", theme);
        document.body.setAttribute("data-theme", theme);
    });
});