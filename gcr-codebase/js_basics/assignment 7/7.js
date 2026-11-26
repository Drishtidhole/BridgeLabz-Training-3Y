const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function (event) {
    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;
});

mouseBox.addEventListener("dblclick", function (event) {
    const rect = mouseBox.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement("div");

    dot.classList.add("dot");
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    mouseBox.appendChild(dot);
});