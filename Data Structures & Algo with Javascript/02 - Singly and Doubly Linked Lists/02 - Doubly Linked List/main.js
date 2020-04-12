class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value){
        if(index===0){
            return this.prepend(value);
        }else if(index >= this.length){
            return this.append(value);
        }else{
            //insert
            const newNode = new Node(value);
            let currentNode = this.head;
            let previousNode = this.head;
            let i = 0;
            while (i < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            newNode.next = currentNode;
            newNode.previous = currentNode.previous;
            currentNode.previous.next = newNode;
            currentNode.previous = newNode;
            this.length++;
        }
        return this;
    }
    remove(index){
        if(index===0){
            let temp = this.head.next;
            this.head.next = null;
            this.head = temp;
            this.head.previous=null;
            this.length--;
            return this;
        }
        if(index>=this.length){
            let currentNode = this.head;
            let i =0;
            while(i < (this.length-2)){
                currentNode = currentNode.next;
                i++;
            }
            currentNode.next = null;
            this.length--;
            return this;
        }else{
            let currentNode = this.head;
            let i =0;
            while(i < index){
                currentNode = currentNode.next;
                i++;
            }
            currentNode.next.previous = currentNode.previous;
            currentNode.previous.next = currentNode.next;
            currentNode.next = null;
            currentNode.previous = null;
            this.length--;
            return this;
        }
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while ( currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedlist = new DoubleLinkedList(10);

myLinkedlist.append(5);

myLinkedlist.prepend(1);

myLinkedlist.insert(10000,4);
myLinkedlist.insert(0,123);



myLinkedlist.remove(0);
myLinkedlist.remove(100000);

myLinkedlist.remove(2);
myLinkedlist.remove(2);

