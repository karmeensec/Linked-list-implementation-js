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

    getElementByIndex(indexList) {

        if ( indexList < 0 || indexList >= this.length) return null;  // check for null

        if ( indexList === 0) return this.head; // check for 0


        let currentIndex = this.head; // by default

        for (let i = 0 ; i < indexList ; i++) {

            currentIndex = currentIndex.next;

        }

        return currentIndex;

    }

    printEelements() {

        let output = ''; // by default
        let currentIndex = this.head;

        while(currentIndex) {

            output = `${output}  ${currentIndex.value} ===> `;
            currentIndex = currentIndex.next;

        }

        console.log(`${output} null`);

    }


    addElementByIndex(indexList, value) {

        if (indexList < 0 || indexList >= this.length) return;

        if (indexList === 0) return this.addToHead(value);

        const previousElement = this.getElementByIndex(indexList - 1); // {10, 20}

        if (previousElement === null) return;  // can't add outside of the range

        previousElement.next = new LinkedListNode(value, previousElement.next)  // <-- current element // {10, 20} --> {10, **30, 20} like Sandwich

        this.length++;

    }


    removeFromHead() {

        this.head = this.head.next;
        this.length--;
    }

}

module.exports = LinkedList;

class LinkedListNode {

    constructor(value, next) {

        this.value = value;
        this.next = next;

    }

}


// Helper function

LinkedList.arrayValues = function(...values) {  // create LinkedList from array values

    const linkedList = new LinkedList();
    
    for (let i = values.length - 1; i >= 0; i--) {

        linkedList.addToHead(values[i]);

    }

    return linkedList;

}