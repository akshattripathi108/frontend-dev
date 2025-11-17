"use strict";
var apiResponse = ["25", "true", "false", "NaN", "  ", "100px", "3.14", null, undefined];

var parsedNumbers = [];
var badEntries = [];

for (var i = 0; i < apiResponse.length; i++) {
    var item = apiResponse[i];
    var asText = String(item);
    var asNum = Number(item);
    var asBool = Boolean(item);
    if (isNaN(asNum)) {
        badEntries.push({ raw: item, text: asText, bool: asBool });
    } else {
        parsedNumbers.push({ raw: item, number: asNum, bool: asBool, text: asText });
    }
}

console.log('Parsed numbers:');
for (var j = 0; j < parsedNumbers.length; j++) {
    console.log(parsedNumbers[j]);
}
console.log('Bad entries:');
for (var k = 0; k < badEntries.length; k++) {
    console.log(badEntries[k]);
}
