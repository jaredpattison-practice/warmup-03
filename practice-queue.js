let Queue = require("./lib/queue.js");

let q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.enqueue(10);

function traverse(queue) {
  while(i = queue.dequeue()) {
    console.log(i);
  }
  // while(queue.peek()) {
  //   console.log(queue.dequeue());
  // }
}

traverse(q);
