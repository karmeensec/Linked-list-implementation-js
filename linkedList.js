 class LinkedList {

    constructor() {

        this.head = null;
        this.length = 0;

    }

    addToHead(data) {

        const newNode = new LinkedListNode(data, this.head); // pass data to the next element -> head 
        this.head = newNode;
        this.length++; // increment, new element will be added
    }

}

module.exports = LinkedList;

class LinkedListNode {

    constructor(value, next) {

        this.value = value;
        this.next = next;

    }

}
