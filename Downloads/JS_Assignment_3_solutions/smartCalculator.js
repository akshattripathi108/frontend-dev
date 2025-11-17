"use strict";
var numA = 25;
var numB = 0;
var operation = 'divide';
try {
    var result;
    if (operation === 'add') {
        result = numA + numB;
    } else if (operation === 'subtract') {
        result = numA - numB;
    } else if (operation === 'divide') {
        if (numB === 0) throw new Error('Cannot divide by zero');
        result = numA / numB;
    } else if (operation === 'power') {
        result = Math.pow(numA, numB);
    } else if (operation === 'root') {
        if (numA < 0) throw new Error('Invalid root');
        result = Math.sqrt(numA);
    } else {
        throw new Error('Unknown operation');
    }
    console.log('Operation: ' + operation + ', Result: ' + result);
} catch (e) {
    console.log('Error: ' + e.message);
}
