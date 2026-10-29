
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

try {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero.");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot calculate the real square root of a negative number.");
            }
            result = Math.sqrt(num1);
            break;

        case "subtract":
            result = num1 - num2;
            break;

        default:
            throw new InvalidOperationError("Operation not recognized.");
    }

    console.log(`Operation: ${operation}`);
    console.log(`Numbers: ${num1}, ${num2}`);
    console.log(`Result: ${result}`);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
