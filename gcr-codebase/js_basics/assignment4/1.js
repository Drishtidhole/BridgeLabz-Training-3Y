
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Pen", 50, "Stationery"),
    new Product(4, "Keyboard", 2000, "Electronics")
];

products[0].applyDiscount(10);

const filteredProducts = products.filter(product => product.price > 1000);

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});
