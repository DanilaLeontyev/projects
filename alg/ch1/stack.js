export default class Stack {
  stack;

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