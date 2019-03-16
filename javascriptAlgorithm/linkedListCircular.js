// the trick is running one point 2x faster than another. if the list is circular, the faster one
// will loop around and coincide with the slower one. Otherwise the reach will end
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }
}

function circular(list) {
    //declare 2 points
    let moveByOne = list.head;
    let moveByTwo = list.head;

    // one slower one 2x faster
    while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;
        console.log(moveByOne,moveByTwo);
        if (moveByTwo === moveByOne) return true;
    }

    return false;
}

const chain = new LinkedList();
chain.insertHead(1);
chain.insertHead(2);
chain.insertHead(3);
chain.head.next.next.next = chain.head;
console.log(circular(chain));