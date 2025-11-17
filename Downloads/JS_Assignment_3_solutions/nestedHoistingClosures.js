"use strict";
function outer() {
    console.log('outer before declaration:', typeof count !== 'undefined' ? count : 'undefined');
    var count = 5;
    function inner() {
        console.log('inner before declaration:', typeof count !== 'undefined' ? count : 'undefined');
        var count = 10;
        console.log('inner after declaration:', count);
    }
    inner();
    console.log('outer after inner:', count);
}
outer();
