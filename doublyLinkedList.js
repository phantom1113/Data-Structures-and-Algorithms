function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

// Class Linked List
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.findLast = findLast;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
};

// Find node
function find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
        if (currNode.next === null)
            return null;
        currNode = currNode.next;
    }
    return currNode;
};

// Display node
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
        console.log(currNode.element);
    }
}

//Display reverse
function dispReverse(){
    let currNode = this.findLast();
    while(currNode.previous !== null){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

//Find last node in doubly linked-list
function findLast() {
    let currNode = this.head;
    while(currNode.next !== null)
    {
        currNode = currNode.next;
    }
    return currNode;
}
//Remove node
function remove(item) {
    let currNode = this.find(item);
    if (currNode !== null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
//Insert Node
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

let book = new LList();

book.insert('Sherlock Holmes', 'head');
book.insert('Edogawa Conan', 'Sherlock Holmes');
book.insert('Think grow and rich', 'Edogawa Conan');
book.display();
book.dispReverse();
