//Without keeping a counter, return the value in a linked list that is at a given step away from the end.

//用2个point, where faster point = point + steps. 当faster point 跑到end的时候,另外一个point就是steps away from the end.

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

function fromTail(list, step) {
    let moveByOne = list.head;
    let aheadByStep = list.head;

    while (step > 0) {
        aheadByStep = aheadByStep.next;
        step--;
    }

    while (aheadByStep.next) {
        moveByOne = moveByOne.next;
        aheadByStep = aheadByStep.next;
    }

    return moveByOne;
}

const chain = new LinkedList();
chain.insertHead(1);
chain.insertHead(2);
chain.insertHead(3);
chain.insertHead(4);
chain.insertHead(5);
console.log(fromTail(chain, 2).data);