"use strict";
var rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

var cleaned = [];

for (var i = 0; i < rawData.length; i++) {
    try {
        var item = rawData[i];
        var parsed = JSON.parse(item);
        if (!parsed.user || parsed.age === undefined) {
            throw new Error('MissingKeys at line ' + i);
        }
        parsed.age = Number(parsed.age);
        if (!isNaN(parsed.age) && parsed.age >= 18) {
            cleaned.push(parsed);
        }
    } catch (e) {
        console.log('Error parsing line ' + i + ': ' + e.message);
    }
}

console.log('Clean entries:');
for (var j = 0; j < cleaned.length; j++) {
    console.log(cleaned[j]);
}
