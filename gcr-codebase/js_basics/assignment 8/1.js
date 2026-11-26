
class Student {

    // Constructor initializes student properties
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {

        let total = this.marks.reduce(function (sum, mark) {
            return sum + mark;
        }, 0);

        return total / this.marks.length;
    }

    // Return grade based on average
    getGrade() {

        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        }
        else if (average >= 75) {
            return "B";
        }
        else if (average >= 50) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

// Create three student objects
let student1 = new Student("Rahul", [90, 85, 95, 88]);
let student2 = new Student("Priya", [80, 75, 70, 85]);
let student3 = new Student("Amit", [40, 45, 35, 50]);

// Display results
let students = [student1, student2, student3];

students.forEach(function (student) {

    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("--------------------");

});
