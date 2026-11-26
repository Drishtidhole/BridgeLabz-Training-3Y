
class User {

    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {

    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {

    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {

        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance < 0 ||
            !Number.isFinite(this.distance)
        ) {
            throw new Error("Invalid distance provided!");
        }

        let ratePerKm = 15;

        return this.distance * ratePerKm;
    }
}

let driver1 = new Driver("Amit", 4.8, "Car", "UP16AB1234");

console.log("Driver:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);

try {
    let trip1 = new Trip("Mathura", "Agra", 60);
    console.log("Fare: Rs.", trip1.calculateFare());
}
catch (error) {
    console.log(error.message);
}

try {
    let trip2 = new Trip("Delhi", "Noida", -10);
    console.log("Fare: Rs.", trip2.calculateFare());
}
catch (error) {
    console.log("Trip Error:", error.message);
}
