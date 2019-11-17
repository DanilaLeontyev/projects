class Stack {
  constructor(args) {
    this.stack = args;
  }

  pop() {
    return this.stack.pop();
  }

  push(arg) {
    this.stack.push(arg);
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length
  }
}

let quotes = []

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 10; i++) {
  quotes.push(getRandomNumber(0, 100))
}

function simpleStockSpan(quotes) {
  let spans = [];
  spans[0] = 1;
  for (let i = 0; i < quotes.length; i++) {
    let k = 1;
    let span_end = false;

    while (i - k >= 0 && !span_end) {
      if (quotes[i - k] <= quotes[i]) {
        k = k + 1;
      } else span_end = true;
      spans[i] = k;
    }
  }

  return spans;
}

function stackStockSpan(quotes) {
  let spans = [];
  spans.push(1);
  let stack = new Stack([]);
  stack.push(0);

  for (let i = 1; i < quotes.length; i++) {
    while (!stack.isEmpty() && quotes[stack.top()] <= quotes[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      spans[i] = i + 1;
    } else {
      spans[i] = i - stack.top();
    }
    stack.push(i);
  }

  return spans;
}
let startSimple = Date.now();
simpleStockSpan(quotes)
console.log(`simple ${Date.now() - startSimple}`);

let startStack = Date.now();
stackStockSpan(quotes);
console.log(`stack ${Date.now() - startStack}`);