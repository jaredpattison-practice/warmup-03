'use strict';

const Stack = require('./stacks-and-queues.js');

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(7);
newStack.push(9);
newStack.pop();
function processStack(stack) {
  while(stack.top) {
    console.log(stack.pop());
  }
}

processStack(newStack);

// console.log(newStack.top);