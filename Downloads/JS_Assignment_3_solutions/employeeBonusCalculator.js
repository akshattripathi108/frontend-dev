"use strict";
var team = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (var i = 0; i < team.length; i++) {
    var worker = team[i];
    var rawSalary = Number(worker.salary);
    var tenure = Number(worker.years);
    if (isNaN(rawSalary) || isNaN(tenure)) {
        console.log('Skipping ' + worker.name + ' due to invalid data');
        continue;
    }
    var bonusAmount = 0;
    if (tenure > 3) {
        bonusAmount = rawSalary * 0.10;
    } else {
        bonusAmount = rawSalary * 0.05;
    }
    var output = worker.name + ' -> Salary: ' + rawSalary + ', Years: ' + tenure + ', Bonus: ' + bonusAmount.toFixed(2);
    console.log(output);
}
