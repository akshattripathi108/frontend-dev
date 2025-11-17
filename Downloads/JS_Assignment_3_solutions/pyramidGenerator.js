"use strict";
var levels = 5;
for (var row = 1; row <= levels; row++) {
    var line = '';
    for (var col = 0; col < row; col++) {
        line = line + '* ';
    }
    console.log(line.trim());
}
