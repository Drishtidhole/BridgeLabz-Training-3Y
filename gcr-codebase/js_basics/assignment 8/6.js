
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 20 },
    { id: 5, name: "Chair", category: "Furniture", price: 3000, stock: 4 }
];

function getLowStockProducts() {
    return products.filter(function (product) {
        return product.stock < 6;
    });
}

function sortProductsByPrice() {
    return [...products].sort(function (a, b) {
        return a.price - b.price;
    });
}

function calculateTotalInventoryValue() {
    return products.reduce(function (total, product) {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce(function (groups, product) {

        let category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}

console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted by Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("Products Grouped by Category:");
console.log(groupByCategory());

