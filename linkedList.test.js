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


describe('#getElementByIndex', () => { 


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

