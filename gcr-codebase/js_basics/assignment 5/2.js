function applyOperation(numbers, operation) {
    const result = numbers.map(operation);
    return result;
}

const numbers = [1, 2, 3, 4];

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

console.log("Doubled Numbers:", applyOperation(numbers, double));
console.log("Squared Numbers:", applyOperation(numbers, square));