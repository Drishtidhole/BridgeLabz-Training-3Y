const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

message.addEventListener("keydown", function (event) {
    const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ];

    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !(event.ctrlKey || event.metaKey)
    ) {
        event.preventDefault();
    }
});

message.addEventListener("input", function () {
    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "yellow";
    } else {
        counter.style.color = "green";
    }
});

resetButton.addEventListener("click", function () {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.style.color = "green";
});