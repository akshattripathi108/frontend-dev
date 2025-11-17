let marks = [85, 90, 88, 92, 80];

let failed = false;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        failed = true;
    }
}

let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
    totalMarks = totalMarks + marks[i];
}

let percentage = (totalMarks / (marks.length * 100)) * 100;

if (failed) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
