class SLLNode {
  // Singly-linked list node class
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  // The singly-linked list class itself
  constructor() {
    this.head = null;
  }

  // Adds a node to the front
  addFront(value) {
    var newNode = new SLLNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  // Remove a node from the front of the list
  removeFront() {
    if (this.head == null) {
      return this.head;
    }
    var removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;
    return this.head;
  }

  // Return the value at the front (head) of the list
  front() {
    if (this.head == null) {
      return null;
    } else {
      return this.head.value;
    }
  }
}

var mySLL = new SLL();
mySLL.addFront(10);
console.log(mySLL);
console.log("--------------------");

mySLL.removeFront();
console.log(mySLL);
console.log("--------------------");

mySLL.addFront(15);
mySLL.front();
console.log(mySLL);
console.log("--------------------");
