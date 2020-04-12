class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;

        if(this.isEmpty()===true)
        {
            this.bottom=newNode;
        }
        return this;
    }

    pop(){
        if(this.isEmpty()===true){
            return null;
        }else{
            if(this.top !== this.bottom) {
                this.top = this.top.next;
                this.length--;
                return this;
            }else{
                this.top = null;
                this.length--;
                return this;
            }
        }
    }

    isEmpty(){
        if(this.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

}



class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(newNode){

        if(this.length===0){
            this.first = newNode;
            this.first = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(this.length===0){
            return null;
        }
        if(this.first===this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    isEmpty(){
        if(this.length === 0){
            return true;
        }
        else{
            return false;
        }
    }
}

const myQueue = new Queue();
const myStack1 = new Stack();
myStack1.push(10);
myStack1.push(20);
myStack1.push(30);
myStack1.push(40);

const myStack2 = new Stack();
const myStack3 = new Stack();
const myStack4 = new Stack();
const myStack5 = new Stack();

console.log(myQueue.enqueue(myStack1));
console.log(myQueue.peek());

