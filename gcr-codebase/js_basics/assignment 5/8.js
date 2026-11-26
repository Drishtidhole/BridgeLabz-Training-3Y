Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const numbers = [1, 2, 3];

const doubled = numbers.myMap(function (number) {
    return number * 2;
});

const squared = numbers.myMap(function (number) {
    return number * number;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);
console.log("Squared Array:", squared);