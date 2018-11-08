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
    if (!this.head)
      return false;

    let currNode = this.head;
    let previousNode = this.head;

    while(currNode !== null && currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null)
      return false;

    // create our new node that points forward to the target node
    const newNode = new _Node(newVal, currNode);

    // if there's no previous node, just set the start node directly
    if(currNode === previousNode) {
      this.head = newNode;
    } else {
      previousNode.next = newNode;
    }
  }

}

LinkedList.prototype.toString = function() {
  let str = '';
  let currNode = this.head;
  while(currNode !== null) {
    if(currNode.next !== null) {
      str += currNode.value + ", ";
    } else {
      str += currNode.value;
    }

    currNode = currNode.next;
  }
  return str;
};

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Hello');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // console.log(SLL);
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore("Apollo", "new value");
  console.log(SLL.toString());
}
main();

/*
insertBefore(value of existing node, value of new node)
if (!head)
  return null

currNode = head
previousNode = head

while(currNode !== null && currNode.value !== value of existing node )
  previousNode = currNode
  currNode = currNode.next

if (currNode === null)
  item not found


previousNode.next = new Node(value of new node, currNode)


*/
