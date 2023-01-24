const LinkedList = require('./linkedList');

describe('#addToHead', ()=> { // testing specific method

    test('Should add element to head of list', ()=> {

        const linkList = new LinkedList();
        linkList.addToHead(30);

        const prevHead = linkList.head;
        linkList.addToHead(50);

        expect(linkList.head.value).toBe(50);
        expect(linkList.head.next).toBe(prevHead);
        expect(linkList.length).toBe(2);

    })

})