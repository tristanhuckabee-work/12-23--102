// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new SinglyLinkedNode(val);

    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  addToTail(val) {
    let node = new SinglyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = node;
      return this;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;

    return this;
  }

  removeFromHead() {
    if (!this.head) return;
    let head = this.head;

    if (this.length == 1) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return head;
  }

  removeFromTail() {
    if (!this.head) return;
    let curr = this.head;
    if (this.length === 1) {
      this.head = null;
      this.length--;
      return curr;
    }

    while (curr.next.next) {
      curr = curr.next;
    }

    let tail = curr.next;
    curr.next = null;
    
    this.length--;
    return tail;
  }

  peekAtHead() {
    if (!this.head) return;
    return this.head.value;
  }

  print() {
    if (!this.length) return;
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode
}
