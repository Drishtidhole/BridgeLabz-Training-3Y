
let userName = "Drishti";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let user = { name: "Drishti", city: "Mathura" };
let emptyValue = null;
let undefinedValue;

let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Empty Value", Value: emptyValue, Type: "null" },
    { Label: "Undefined", Value: undefinedValue, Type: typeof undefinedValue }
];

console.table(report);
