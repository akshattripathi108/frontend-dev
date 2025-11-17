let currentSalary = 30000;
let incrementRate = 8;
let salaries = [];

for (let year = 1; year <= 5; year++) {
    currentSalary = currentSalary + (currentSalary * incrementRate / 100);
    salaries.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(salaries);
