const LinkedList = require('./linkedList');

// Test driven development

describe('#addToHead', ()=> { // testing specific method addToHead

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


describe('#getElementByIndex', () => {  // testing specific method getElementByIndex


    describe('If we put index less than 0', ()=> {

        test('Should return null', ()=> {

            const linkList = LinkedList.arrayValues(5, 20);

            expect(linkList.getElementByIndex(-1)).toBeNull();
            

        })

    })


    describe('If we put index greater than length of the list', ()=> {

        test('Should return null', ()=> {

            const linkList = LinkedList.arrayValues(5, 20);

            expect(linkList.getElementByIndex(4)).toBeNull();

        });

    })


    describe('if we put 0 as an index', ()=> {

        test('Should return head', ()=> {  // first element should be head

            const linkList = LinkedList.arrayValues(5, 20);

            expect(linkList.getElementByIndex(0)).toBe(linkList.head);

        });

    });


    describe('if we get index in the middle of the list', ()=> {

        test ('Should return that element', ()=> {

            const linkList = LinkedList.arrayValues(5, 15, 20, 25 );

            expect(linkList.getElementByIndex(3).value).toBe(25);

        });

    });


 })



 describe('#addElementByIndex', ()=> {

    describe('If we put index less than 0', ()=> {

        test('Do not do anything', ()=> {

            const linkList = LinkedList.arrayValues(5, 20);

            // expect(linkList.addElementByIndex(-1)).toBeNull(); // outside of the range

            linkList.addElementByIndex(-1, 25);
            expect(linkList.length).toBe(2);

        });

    })


    describe('If we put index greater than length of the list', () => { 

        test('Do not do anything', ()=> {

            const linkList = LinkedList.arrayValues(5, 20);

            // expect(linkList.addElementByIndex(6)).toBeNull(); // outside of the range

            linkList.addElementByIndex(6, 25);
            expect(linkList.length).toBe(2);

        });

    })


    describe('if we put 0 as an index', ()=> {

        test('Must add it to the head', ()=> {

            const linkList = LinkedList.arrayValues(5, 20);

            linkList.addElementByIndex(0, 25);

            expect(linkList.head.value).toBe(25);
            expect(linkList.head.next.value).toBe(5);
            expect(linkList.length).toBe(3);

            // expect(linkList.addElementByIndex(0)).toBe(linkList.head);  // or 5

        });

    })

    describe('if we add index in the middle of the list', ()=> {

        test('Must add it to the head', ()=> {

            const linkList = LinkedList.arrayValues(5, 15, 20, 25);

            linkList.addElementByIndex(3, 30); // add 30 to the 5th position

            const node = linkList.getElementByIndex(3);

            expect(node.value).toBe(30);
            expect(node.next.value).toBe(25);
            expect(linkList.length).toBe(5);

        });

    })

 });

