let adder = (x) => (y) => x + y;
let incrementer = adder(1);

console.log(`incrementer 1: ${incrementer(2)}`)