
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let errors = [];
let under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsedData = JSON.parse(rawData[i]);

        if (parsedData.user === undefined || parsedData.age === undefined) {
            throw new Error("Missing user or age key");
        }

        const age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        const user = {
            ...parsedData,
            age: age
        };

        cleanData.push(user);

        if (age < 18) {
            under18Users.push(user);
        }

        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Users Under 18:", under18Users);
console.log(`Valid Count: ${cleanData.length}`);
console.log(`Error Count: ${errors.length}`);
