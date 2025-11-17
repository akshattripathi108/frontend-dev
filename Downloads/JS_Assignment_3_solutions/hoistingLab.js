"use strict";
console.log('--- Hoisting Lab (fixed) ---');
var score = 50;
function announce() { console.log('Game started'); }
announce();
let status = "ready";
function startGame() { console.log(status); }
startGame();
console.log('\n--- Hoisting demonstration output prediction explanation available in README ---');
