
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MISSING_PROPERTY");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalid.push({
            index: i + 1,
            error: error.message
        });

        console.log(`Transaction ${i + 1} failed: ${error.message}`);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`Successful Count: ${valid.length}`);
console.log(`Failed Count: ${invalid.length}`);
