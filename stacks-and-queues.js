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

class Queue {

  constructor() {
    this.queue = new Array();
    this.front = null;
    // this.rear = null;
  }

  peek() {
    return this.front;
  }

  enqueue(value) {
    // let node = new Node(value);
    this.queue.push(value);
    this.front = this.queue[0];
  }

  dequeue() {
    let value = this.queue.shift();
    if (this.queue.length === 0) {
      this.front = null;
    }
    return value;
  }
}


module.export = Stack, Queue;

