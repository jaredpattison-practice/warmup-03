let Stack = require('./stack.js');

let stack = new Stack();
stack.push(10);
stack.push(9);
stack.push(8);
stack.push(7);
stack.push(6);

function clear(stack) {
  while(stack.peek()) { 
    console.log(stack.pop());
  }
}

clear(stack);