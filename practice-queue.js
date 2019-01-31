'use strict';

const Queue = require('./queue.js');

let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(7);
newQueue.enqueue(4);

function dequeueAndPrint(queue){

  while (queue.front){
    console.log(queue.dequeue());
  }
}

dequeueAndPrint(newQueue);