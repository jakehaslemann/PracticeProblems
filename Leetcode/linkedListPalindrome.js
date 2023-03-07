function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
@param {ListNode} head
var isPalindrome = function (head) {
  console.log(head.val + "  " + head.getLast);
  while (head.next != null) {
    if (head.getLast() === head.getFirst()) {
      //remove the first and last element from the linked list
      head.head = head.head.next; //removes the head(first element) from the linked list;
    } else {
      return false;
    }
  }
  console.log(head);
  return true;
};
console.log(isPalindrome((head = [1, 2])));
