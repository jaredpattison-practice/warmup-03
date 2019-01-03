const LL = require('./linked-list.js');

let list = new LL.LinkedList;
list.append('a');
list.append('b');
list.append('c');
list.append('d');

let current = list.head;
while(current.next) {
  console.log(current.value);
  current = current.next;
}

console.log(current.value);



