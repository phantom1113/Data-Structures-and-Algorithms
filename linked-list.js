class Node {
        constructor(data,next=null){
            this.data = data;
            this.next = next;
        }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
}
LinkedList.prototype.insertAtBeginning = function(data){

    // A newNode object is created with property data and next = null
    
        let newNode = new Node(data);
    
    // The pointer next is assigned head pointer so that both pointers now point at the same node.
    
        newNode.next = this.head;
    
    // As we are inserting at the beginning the head pointer needs to now point at the newNode. 
        
        this.head = newNode;
    
        return;
    
    }
    LinkedList.prototype.insertAtEnd = function(data){

        // A newNode object is created with property data and next=null
            
            let newNode = new Node(data);
        
        // When head = null i.e. the list is empty, then head itself will point to the newNode.
        
            if(!this.head){
                this.head = newNode;
                return;
            }
        
        // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
        
           let tail = this.head;
           while(tail.next !== null){
                tail = tail.next;
           }
           tail.next = newNode;     
           return ;     
        }
    LinkedList.prototype.deleteFirstNode = function(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
            return this.head;
        }
    LinkedList.prototype.conTain= function(value){
        n = this.head;
        // Run throungh the linked list if n is null or n.dat != value -> break
        while(n!=null && n.data != value){
            n = n.next;
        }
        if(n==null)
            return false;
        return true;
    }
    LinkedList.prototype.traVerse= function*(){
        n = this.head;
        i = 0;
        while(i<4){
            yield n.data;
            n = n.next;
            i++;
        }
    }
    LinkedList.prototype.checkLegnhtList= function(){
        n = this.head;
        let temp = 0;
        while(n !=null){
            temp++;
            n = n.next;
        }
        return temp;
    }
        let list = new LinkedList;
        list.insertAtEnd(6);
        list.insertAtEnd(16);
        list.insertAtEnd(10);
        list.insertAtEnd(8);
        console.log(list);
        console.log(list.checkLegnhtList());