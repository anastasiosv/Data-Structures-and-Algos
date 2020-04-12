class Node{
 constructor(value) {
     this.value = value;
     this.next = null;
 }
}

class Stack {
    constructor(){
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
        //adding value as head
    }
    pop(){
        let myval = null;
        if(this.isEmpty()===true){
            return myval;
        }else{

            if(this.top !== this.bottom) {
                myval = this.top.value;
                this.top = this.top.next;
                this.length--;
                return myval;
            }else{
                this.top = null;
                myval = null;
                this.length--;
                return myval;
            }
        }
        //removing the first (head) item
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

const myStack = new Stack();
console.log(myStack.isEmpty());

myStack.push(10);

myStack.push(5);
console.log(myStack.peek());

myStack.push(13);
myStack.push(21);
console.log(myStack.peek());

console.log('pop"d',myStack.pop());
console.log(myStack.peek());
