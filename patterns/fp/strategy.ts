const operation = (operation) => (a) => (b) => operation(a, b)

const add = operation((a, b) => a + b)
const sub = operation((a, b) => a - b)
const mult = operation((a, b) => a * b)

console.log(add(2)(3));
console.log(sub(3)(2));
console.log(mult(3)(2));