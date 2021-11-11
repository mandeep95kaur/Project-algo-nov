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

  display() {
    var listStr = "";

    if (this.head == null) {
      return "Empty List";
    }

    listStr += this.head.value;

    var runner = this.head.next;
    while (runner != null) {
      listStr += ", " + runner.value;
      runner = runner.next;
    }
    return listStr;
  }
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(15);
mySLL.addFront(20);
console.log(mySLL.display());
console.log("--------------------");

mySLL.removeFront();
mySLL.removeFront();
console.log(mySLL.display());
console.log("--------------------");
