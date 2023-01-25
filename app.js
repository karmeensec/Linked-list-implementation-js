const LinkedList = require('./linkedList');

// .1

const linkList = LinkedList.arrayValues(20, 30, 40, 50, 60);

linkList.printEelements(); 

// .2

console.log(linkList.getElementByIndex(0).value);

// .3

linkList.addElementByIndex(2, 45);

linkList.printEelements(); 

// .4

linkList.removeFromHead();

linkList.printEelements();

// .5

linkList.removeByIndex(3);

linkList.printEelements();
