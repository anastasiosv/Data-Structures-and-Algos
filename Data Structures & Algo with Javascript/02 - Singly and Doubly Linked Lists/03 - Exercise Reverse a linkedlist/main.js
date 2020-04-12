class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        const newNode = new Node(value);
        let currentNode = this.head;
        let i = 0;
        if (index >= this.length){
            return this.append(value);
        }
        if (index === 0){
            return this.prepend(value);
        }
        while (currentNode !== index && i < index) {
            currentNode = currentNode.next;
            i++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        let currentNode = this.head;
        let i = 0;
        if (index === 0 ){
            this.head = this.head.next;
            return this;
        }
        if (index >= this.length){
            while(i < (this.length-2)){
                currentNode = currentNode.next;
                i++;
            }
            currentNode.next = null;
            return this;
        }
        while (i < index-1) {
            currentNode = currentNode.next;
            i++;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
        return this;
    }

    reverse(){
        const reversed = new LinkedList(this.head.value);
        let i=0;
        let currentNode = this.head;
        if(!this.head.next){
            return this.head;
        }
        while(i < (this.length-1) ){
            currentNode = currentNode.next;

            reversed.prepend(currentNode.value);
            i++
        }
        return reversed;

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

const myLinkedlist = new LinkedList(10);
myLinkedlist.append(5);

myLinkedlist.prepend(1);

myLinkedlist.insert(0,100);
myLinkedlist.insert(3,3);
myLinkedlist.insert(4,100);
myLinkedlist.insert(101,32);

let rev = myLinkedlist.reverse()
console.log(rev.printList());
