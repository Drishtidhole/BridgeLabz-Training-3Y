
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    if (value === null || value === undefined || String(value).trim() === "" || Number.isNaN(numberValue)) {
        invalidNumbers.push(value);

        console.log(`Invalid: ${String(value)} | Number: ${numberValue} | Boolean: ${booleanValue} | String: ${stringValue}`);
    } else {
        validNumbers.push(numberValue);

        console.log(`Valid: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue} | String: ${stringValue}`);
    }
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log(`Valid Count: ${validNumbers.length}`);
console.log(`Invalid Count: ${invalidNumbers.length}`);
