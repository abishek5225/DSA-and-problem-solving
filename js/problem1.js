//creating a linked list js do not have builtin linked lists
//we define class for a node

class ListNode{
    constructor(value){
        this.value = value;//stores data
        this.next = null;//pointrer to the next node
    }
}
//creating nodes manually
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// [1 | *] -> [2 | *] -> [3 | Null] 

//Traversing the linked list
function traverseLinkedList(head){
    let currentNode = head;
    while(currentNode !== null){
        console.log(currentNode.value); //print current node value
        currentNode = currentNode.next; //move to next node
    }
}

