"use strict";
var transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

var ok = [];
var problems = [];

for (var i = 0; i < transactions.length; i++) {
    var tx = transactions[i];
    try {
        if (tx === null) {
            throw { type: 'NullEntry', message: 'Transaction is null', index: i };
        }
        if (tx.id === undefined || tx.amount === undefined) {
            throw { type: 'MissingField', message: 'Missing id or amount', index: i };
        }
        if (tx.amount < 0) {
            throw { type: 'NegativeAmount', message: 'Negative amount', index: i };
        }
        ok.push(tx);
    } catch (err) {
        problems.push({ index: i, error: err });
    }
}

console.log('Valid transactions count: ' + ok.length);
console.log('Invalid transactions count: ' + problems.length);
for (var p = 0; p < problems.length; p++) {
    console.log(problems[p]);
}
