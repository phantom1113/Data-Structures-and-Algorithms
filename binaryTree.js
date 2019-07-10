function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.find = find;
    this.findMinNode = findMinNode;
    this.remove = remove;
    this.getMin = getMin;
    this.getMax = getMax;
}

function insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

const arr = []

//Show LNR
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        arr.push(node.show());
        inOrder(node.right);
    }
}

// NLR
function preOrder(node) 
{
    if (!(node == null)) 
    {
        arr.push(node.show());
        preOrder(node.left);
        preOrder(node.right);   
    }
}

//LRN
function postOrder(node) {
    if (!(node == null)) 
    {
        postOrder(node.left);
        postOrder(node.right);
        arr.push(node.show());  
    }
}

function getMin() {
    let current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
}

function getMax() {
    let current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}

function find(data) {
    let current = this.root;
    while (current.data != data){
        if(data < current.data){
            current = current.left;
        } else {
            current = current.right;
        }
        if(current == null)
        {
            return null;
        }
    }
    return current.data
}

function remove(data) {
    this.root = removeNode(this.root, data)
}

function findMinNode(node) 
{ 
    if(node.left === null) 
        return node; 
    else
        return this.findMinNode(node.left); 
} 

function removeNode(node, data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        if(node.left == null && node.right == null){
            return null;
        }
        if(node.left == null){
            return node.right;
        }
        if(node.right == null){
            return node.left;
        }
        let tempNode = findMinNode(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data)
        return node;
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.remove(45);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log(arr.toString())
