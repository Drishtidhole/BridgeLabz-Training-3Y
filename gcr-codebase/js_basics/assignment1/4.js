
let marks = [90, 88, 92, 85, 80];

let total = 0;
let detainedSubject = false;

for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        detainedSubject = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (detainedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
