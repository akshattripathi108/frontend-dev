let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");
let includesBad = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Word Count:", words.length);

if (includesBad) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
