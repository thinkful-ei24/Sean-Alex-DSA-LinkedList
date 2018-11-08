class _Node {
  constructor(value, previous, next) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, null, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode, null);
    }
  }
  // insertBefore(key, newVal) {
  //   if (!this.head) return false;

  //   let currNode = this.head;
  //   let previousNode = this.head;

  //   while (currNode !== null && currNode.value !== key) {
  //     previousNode = currNode;
  //     currNode = currNode.next;
  //   }

  //   if (currNode === null) return false;

  //   // create our new node that points forward to the target node
  //   const newNode = new _Node(newVal, currNode);

  //   // if there's no previous node, just set the start node directly
  //   if (currNode === previousNode) {
  //     this.head = newNode;
  //   } else {
  //     previousNode.next = newNode;
  //   }

  insertBefore(key, newVal) {
    if (!this.head) return false;

    let current = this.head;

    while (current !== null && current.value !== key) {
      current = current.next;
    }

    if (current === null) return false;

    const newNode = new _Node(newVal, current.previous, current);
    current.previous.next = newNode;
    current.previous = newNode;
    // console.log('current.previous:', current.previous);

    // if (current === current.previous) {
    //   this.head = newNode;
    // } else {
    //   current.previous.next = newNode;
    // }
  }
}
function main() {
  const list = new DoubleLinkedList();
  list.insertLast('Aquaria');
  list.insertLast('Caprica');
  list.insertBefore('Aquaria', 'Picon');
  console.log(list.head.next);
}

main();
