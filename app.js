const LinkedList = require('./linkedList');

const linkList = LinkedList.arrayValues(20, 30, 40);

linkList.printEelements(); 

console.log(linkList.getElementByIndex(0).value);

linkList.addElementByIndex(2, 45);

linkList.printEelements(); 