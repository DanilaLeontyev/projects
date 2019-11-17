{
  class Stack {
    stack: unknown[];

    constructor(args?: unknown[]) {
      this.stack = args;
    }

    pop() {
      return this.stack.pop();
    }

    push(arg: unknown) {
      this.stack.push(arg);
    }

    top(): unknown {
      return this.stack[this.stack.length - 1]
    }

    isEmpty() {
      return this.stack.length === 0;
    }

    size() {
      return this.stack.length
    }
  }

  let stack = new Stack([1, 2, 3, 4])

  console.log(stack.pop());
  stack.push(23);
  console.log(stack);
  stack.pop()
  stack.pop()
  stack.pop()
  stack.pop()
  console.log(stack.isEmpty())
  stack.push(3);
  console.log(stack.top());
  console.log(stack);
  console.log(stack.size());
}