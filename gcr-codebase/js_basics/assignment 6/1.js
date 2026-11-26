function boilWater() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.2) {
                console.log("Water boiled successfully");
                resolve("Boiling completed");
            } else {
                reject("Failed to boil water");
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed successfully");
                resolve("Brewing completed");
            } else {
                reject("Failed to brew coffee");
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into the cup");
                resolve("Pouring completed");
            } else {
                reject("Failed to pour coffee");
            }
        }, 1500);
    });
}

boilWater()
    .then(function (result) {
        console.log(result);
        return brewCoffee();
    })
    .then(function (result) {
        console.log(result);
        return pourCoffee();
    })
    .then(function (result) {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch(function (error) {
        console.log("Coffee Process Error:", error);
    });