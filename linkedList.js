// Class Node
function Node(element) {
    this.element = element;
    this.next = null;
};

// Class Linked List
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
};

// Find node
function find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
        if (currNode.next === null)
            return false;
        currNode = currNode.next;
    }
    return currNode;
};

//Insert node
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    if (current) {
        newNode.next = current.next;
        current.next = newNode;
    }
}

// Display node
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
        console.log(currNode);
    }
}

//Find previousNode of node
function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element !== item)) {
        currNode = currNode.next
    }
    if (currNode.next === null)
        return null;
    return currNode;
}

//Remove node
function remove(item) {
    let prevNode = this.findPrevious(item);
    if (prevNode !== null) {
        prevNode.next = prevNode.next.next;
    }
}

let book = new LList();

book.insert('Sherlock Holmes', 'head');
book.insert('Edogawa Conan', 'Sherlock Holmes');
book.insert('Think grow and rich', 'Edogawa Conan');
book.display();
console.log(book.findPrevious('Perterson'));
book.remove('Edogawa Conan');
book.display();