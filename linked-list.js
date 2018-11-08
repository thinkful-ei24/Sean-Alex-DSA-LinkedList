class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  // key is the value of the node to be matched against
  // newVal is the value of the new element to be inserted
  insertBefore(key, newVal) {
    if (!this.head) return false;

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) return false;

    // create our new node that points forward to the target node
    const newNode = new _Node(newVal, currNode);

    // if there's no previous node, just set the start node directly
    if (currNode === previousNode) {
      this.head = newNode;
    } else {
      previousNode.next = newNode;
    }
  }

  // a->b->c
  // insert x after b: a->b->x->c
  insertAfter(key, newVal) {
    // check if the list is empty
    if (!this.head) {
      return;
    }

    let currNode = this.head;

    while (currNode) {
      // find target node
      if (currNode.value === key) {
        // insert after
        currNode.next = new _Node(newVal, currNode.next);
        return;
      }
      currNode = currNode.next;
    }
  }

  // a->b->c->d->e    insert x at index=3
  // a->b->c->x->d->e
  insertAt(index, newValue) {
    if (index === 0) {
      this.insertFirst(newValue);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;
    let counter = 0;
    while (currNode) {
      // find target node
      if (counter === index) {
        prevNode.next = new _Node(newValue, currNode);
      }
      counter++;
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
}

LinkedList.prototype.toString = function() {
  return this.valueOf().toString();
};

LinkedList.prototype.valueOf = function() {
  const arr = [];
  let currNode = this.head;
  while (currNode !== null) {
    arr.push(currNode.value);
    currNode = currNode.next;
  }
  return arr;
};

function size(linkedList) {
  let currentNode = linkedList.head;
  let i = 0;
  while (currentNode) {
    i++;
    currentNode = currentNode.next;
  }
  return i;
}

function isEmpty(linkedList) {
  return linkedList.head === null;
}

function findPrevious(linkedList, targetValue) {
  let currentNode = linkedList.head;
  let prevNode = linkedList.head;
  while (currentNode) {
    if (currentNode.value === targetValue) {
      return prevNode;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return null;
}

function findLast(linkedList) {
  let currentNode = linkedList.head;
  let prevNode = linkedList.head;
  while (currentNode) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return prevNode.value;
}

function whatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
      current = current.next;
    }
  }
}

// loop through list
// counter++
// when node.next = null
// length = counter
// if current node.next === null, node.next.next === null,
// node.next.next === null

function third(list) {
  let current = list.head;
  while (current) {
    if (current.next.next.next === null) {
      return current.value;
    }
    current = current.next;
  }
  return 'not found';
}

/**
 * 1->2->3
 * 1<-2<-3 or 3->2->1
 *
 * reverseList(list)
 * start at the head
 *
 *
 * current = head
 * previous = head
 *
 * if current.next is null
 *
 *    current.next = previous
 *
 */

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  // SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  // SLL.insertLast('Boomer');
  SLL.insertLast('Hello');
  SLL.insertLast('Husker');
  // SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // SLL.insertLast('Starbuck');
  // console.log(SLL);
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertAt(0, 'x');
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findLast(SLL));

  // console.log(SLL.toString());
  // console.log(whatDoesThisProgramDo(SLL));
  console.log(SLL.toString());
  console.log(third(SLL));
}

main();
