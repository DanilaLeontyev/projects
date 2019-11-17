var adder = function (x) { return function (y) { return x + y; }; };
var incrementer = adder(1);
console.log("incrementer 1: " + incrementer(2));
