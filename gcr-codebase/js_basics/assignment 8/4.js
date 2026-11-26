
class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing regular employee work.");
    }
}

class Manager extends Employee {

    constructor(name, department) {
        super(name, department);
    }

    work() {
        console.log(this.name + " is managing the team.");
    }
}

let employee1 = new Employee("Rahul", "IT");
let manager1 = new Manager("Priya", "HR");

employee1.work();
manager1.work();

let people = [employee1, manager1];

people.forEach(function (person) {
    person.work();
});
