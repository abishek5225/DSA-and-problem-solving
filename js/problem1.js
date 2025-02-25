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

