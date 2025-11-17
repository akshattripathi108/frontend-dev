let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let max = scores[0];
let min = scores[0];
let sum = 0;
let passed = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) max = scores[i];
    if (scores[i] < min) min = scores[i];
    sum = sum + scores[i];
    if (scores[i] >= 50) passed++;
}

let average = sum / scores.length;

console.log("Scores:", scores);
console.log("Highest:", max);
console.log("Lowest:", min);
console.log("Average:", average);
console.log("Passed:", passed);
