
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedTotal = 0;

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price -= price * 0.10;
    } else if (product.category === "fashion") {
        price -= price * 0.05;
    }

    discountedTotal += price;
}

let originalTotal = cart.reduce(
    (sum, product) => sum + product.price,
    0
);

if (discountedTotal > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
console.log(`Final Total: ₹${discountedTotal.toFixed(2)}`);
