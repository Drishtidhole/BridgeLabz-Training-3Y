
let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 },
    { name: "Fries", price: 80 }
];

function calculateBill(orderItems) {

    let priceList = orderItems.map(function (item) {

        let product = menu.find(function (food) {
            return food.name === item;
        });

        // Throw error if item is not available
        if (!product) {
            throw new Error(item + " is not available in the menu!");
        }

        return product.price;

    });

    // Calculate total using reduce()
    let total = priceList.reduce(function (sum, price) {
        return sum + price;
    }, 0);

    return total;
}

// Test valid order
try {

    let order = ["Pizza", "Burger", "Fries"];

    let bill = calculateBill(order);

    console.log("Total Bill: Rs.", bill);

}
catch (error) {

    console.log("Order Error:", error.message);

}

try {

    let order = ["Pizza", "Burger", "Sushi"];

    let bill = calculateBill(order);

    console.log("Total Bill: Rs.", bill);

}
catch (error) {

    console.log("Order Error:", error.message);

}
