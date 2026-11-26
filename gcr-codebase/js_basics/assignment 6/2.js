console.log("Start");

setTimeout(function () {
    console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(function () {
    console.log("Microtask: Promise");
});

console.log("Synchronous log");

console.log("End");