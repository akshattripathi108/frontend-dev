let expenses = [5000, 1200, 8000, 2500, 1500];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i];
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;

console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("After Tax:", finalAmount.toFixed(2));
