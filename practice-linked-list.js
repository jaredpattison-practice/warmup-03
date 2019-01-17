const LL = require('./linked-list.js');

let list = new LL.LinkedList;
list.append(2);
list.append(4);
list.append(6);
list.append(8);

function traverse(ll) {
  let current = list.head;
  while(current.next) {
    console.log(current.value);
    current = current.next;
  }
}

traverse(list);