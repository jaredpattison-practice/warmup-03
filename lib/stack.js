'use strict';

// const Node = require('./node.js');

class Stack {
  constructor() {
    this.stack = new Array();
    this.top = null;
  }

  push(value) {
    this.stack.unshift(value);
    this.top = value;
  }

  peek() {
    return this.top;
  }

  pop() {
    let value = this.stack.shift();
    if (this.stack.length === 0) {
      this.top = null;
    }
    return value;
  }
}

module.exports = Stack;
