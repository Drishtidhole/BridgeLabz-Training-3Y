
let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

let lowerFeedback = feedback.toLowerCase();

if (
    !lowerFeedback.includes("bad") &&
    !lowerFeedback.includes("poor")
) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log(`Word Count: ${wordCount}`);
