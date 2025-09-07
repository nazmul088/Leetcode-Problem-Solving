class MinStack {
  stack = [];
  minStack = [];
  constructor() {}

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (this.stack.length === 1) {
      this.minStack.push(val);
    } else {
      if (val < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
    }

  }
  /**
   * @return {void}
   */
  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

function test(args) {
  let minStack;
  let output = [];
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "MinStack":
        minStack = new MinStack();
        output.push(null);
        break;
      case "push":
          minStack.push(args[i + 1]);
          output.push(null);
          i++;
          break;
      case "pop":
        minStack.pop();
        output.push(null);
        break;
      case "top":
        output.push(minStack.top());
        break;
      case "getMin":
        output.push(minStack.getMin());
        break;
      default:
        break;
    }
  }

  return output;
}

console.log(test(["MinStack","push", -2, "push", 0 ,"push", -1, "getMin","top","pop","getMin"]));
