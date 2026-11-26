const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

let editingItem = null;

addButton.addEventListener("click", function () {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${productName}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

productList.addEventListener("click", function (event) {
    const li = event.target.closest("li");

    if (!li) return;

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {
        if (editingItem && editingItem !== li) {
            saveEdit();
        }

        if (editingItem === li) return;

        const span = li.querySelector("span");
        const input = document.createElement("input");

        input.value = span.textContent;
        span.replaceWith(input);

        editingItem = li;
        input.focus();
    }
});

function saveEdit() {
    if (!editingItem) return;

    const input = editingItem.querySelector("input");

    if (input) {
        const span = document.createElement("span");
        span.textContent = input.value.trim() || "Unnamed Product";
        input.replaceWith(span);
    }

    editingItem = null;
}

document.addEventListener("click", function (event) {
    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }
});