/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }

    let headvalue = this.head.value;
    this.head = this.head.next;
    this.length -= 1;

    if(this.length === 0) {
      this.tail = null;
    }

    return headvalue;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
    }

    return currentNode.value;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    currentNode.value = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
        throw new Error("Index is invalid");
    }

    if (idx === 0) {
        this.unshift(val);
        return;
    }

    if (idx === this.length) {
        this.push(val);
        return;
    }

    let newNode = new Node(val);
    let currentNode = this.head;

    for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
   }

    if (idx === 0) {
      return this.shift();
   }

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < idx; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;

    if (idx === this.length - 1) {
        this.tail = previousNode;
    }

    this.length -= 1;

    return currentNode.value;
  }

  

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
