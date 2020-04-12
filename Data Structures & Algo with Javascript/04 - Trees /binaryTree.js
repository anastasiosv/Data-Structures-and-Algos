class Node{
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            // tree is empty
            // set newnode as root
            this.root = newNode;
        } else {
            let currNode = this.root;
            while (1) {
                if (newNode.value < currNode.value) {
                    if (!currNode.left) {
                        currNode.left = newNode;
                        return this;
                    }
                    currNode = currNode.left;
                } else {
                    if (!currNode.right) {
                        currNode.right = newNode;
                        return this;
                    }
                    currNode = currNode.right;
                }

            }

        }
    }


    mylookup(value) {
//return the node we are looking for or null if i don't find it
        if (!this.root) {
            return false;
        } else {
            let currNode = this.root;
            while (1) {
                if (value < currNode.value) {
                    if (currNode.left) {
                        currNode = currNode.left;
                    } else {
                        return null;
                    }
                } else if (value > currNode.value) {
                    if (currNode.right) {
                        currNode = currNode.right;
                    } else {
                        return null;
                    }
                } else if (value === currNode.value) {
                    return currNode;
                }
            }
        }
    }

    lookup(value) {
//return the node we are looking for or null if i don't find it
        if (!this.root) {
            return false;
        } else {
            let currNode = this.root;
            while (currNode) {

                if (value < currNode.value) {
                    currNode = currNode.left;
                } else if (value > currNode.value) {
                    currNode = currNode.right;
                } else if (value === currNode.value) {
                    return currNode;
                }
            }
            return false;
        }
    }

    remove(value) {
        if(!this.root){
            return false;
        }

        let currNode = this.root;
        let parentNode = null;
        while (currNode) {
            if (value < currNode.value) {
                parentNode = currNode;
                currNode = currNode.left;
            } else if (value > currNode.value) {
                parentNode = currNode;
                currNode = currNode.right;
            } else if (value === currNode.value) {
                // if left kid exists paw ekei alliws menw currNode
                if (currNode.right === null) {
                    if(parentNode === null){
                        this.root = currNode.left;
                    }else{
                        /*
                        if parent > current value, make current left child a child of the parent
                         */
                        if(currNode.value < parentNode.value){
                            parentNode.left = currNode.left;
                            /*
                             if parent < current value, make left child a right child of parent
                            */
                        } else if (currNode.value > parentNode.value){
                            parentNode.right = currNode.left;
                        }
                    }
                }else if (currNode.right.left === null){
                    if(parentNode === null){
                        this.root = currNode.left;

                    }else{
                        currNode.right.left = currNode.left;

                        if(currNode.value < parentNode.value){
                            parentNode.left = currNode.right;
                        } else if (currNode.value > parentNode.value){
                            parentNode.right = currNode.right;
                        }
                    }
                // right child that has a left child
                }else {
                    //find the Right child's left most child
                    let leftmost = currNode.right.left;
                    let leftmostParent = currNode.right;
                    while( leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currNode.left;
                    leftmost.right = currNode.right;

                    if(parentNode === null){
                        this.root = leftmost;
                    } else {
                        if ( currentNode.value < parentNode.value){
                            parentNode.left = leftmost;
                        } else if (currNode.value > parentNode.value){
                            parentNode.right = leftmost;
                        }
                    }

                }
                return true;
            }
        }
    }
}
        



const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);


console.log(tree.remove(170));

console.log(JSON.stringify(traverse(tree.root)));


function traverse(node){
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}