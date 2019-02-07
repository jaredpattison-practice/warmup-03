const LL = require('./linked-list.js');

let list = new LL.LinkedList;
list.append(10);
list.append(9);
list.append(8);
list.append(7);

function traverse(ll) {
  let current = list.head;
  while(current.next) {
    console.log(current.value);
    current = current.next;
  }
}

function traverse(list) {
  let current = list.head;
  while(current.next) {
    console.log(current.value);
    current = current.next;
  }
}

function traverse(ll) {
  let current = list.head;
  while(current.next) {
    console.log(current.value);
    current = current.next;
  }
}

traverse(list);