{
    var Stack = /** @class */ (function () {
        function Stack(args) {
            this.stack = args;
        }
        Stack.prototype.pop = function () {
            return this.stack.pop();
        };
        Stack.prototype.push = function (arg) {
            this.stack.push(arg);
        };
        Stack.prototype.top = function () {
            return this.stack[this.stack.length - 1];
        };
        Stack.prototype.isEmpty = function () {
            return this.stack.length === 0;
        };
        Stack.prototype.size = function () {
            return this.stack.length;
        };
        return Stack;
    }());
    var stack = new Stack([1, 2, 3, 4]);
    console.log(stack.pop());
    stack.push(23);
    console.log(stack);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    console.log(stack.isEmpty());
    stack.push(3);
    console.log(stack.top());
    console.log(stack);
    console.log(stack.size());
}
