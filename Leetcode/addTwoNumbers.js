// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
 
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(); //create a dummy list to keep track of the beginning of the list
  let newNumber = dummy; //create another normal list
  let remainder = 0; //create a remainder variable
  // go through the two lists while they remain
  while (l1 && l2) {
    //goes through the values of both lists until one of them runs out of characters
    if (l1.val + l2.val + remainder <= 9) {
      //checks if the numbers added are greater than 10
      newNumber.next = new ListNode(l1.val + l2.val + remainder, null); //if less than 10 add the number to the end of the new list
      newNumber = newNumber.next;
      l1 = l1.next; //moving both given lists forward
      l2 = l2.next;
      remainder = 0;
    } else {
      newNumber.next = new ListNode(l1.val + l2.val + remainder - 10, null); //if greater than 10 add the number - 10 to the new list
      newNumber = newNumber.next;
      l1 = l1.next; //moving both given lists forward
      l2 = l2.next;
      remainder = 1;
    }
  }
  while (l1) {
    //if list 1 remains and list 2 is empty
    if (l1.val + remainder <= 9) {
      newNumber.next = new ListNode(l1.val + remainder, null);
      newNumber = newNumber.next;
      l1 = l1.next;
      remainder = 0;
    } else {
      newNumber.next = new ListNode(l1.val + remainder - 10, null);
      newNumber = newNumber.next;
      l1 = l1.next;
      remainder = 1;
    }
  }
  while (l2) {
    //if list 2 remains and list 1 is empty
    if (l2.val + remainder <= 9) {
      newNumber.next = new ListNode(l2.val + remainder, null);
      newNumber = newNumber.next;
      l2 = l2.next;
      remainder = 0;
    } else {
      newNumber.next = new ListNode(l2.val + remainder - 10, null);
      newNumber = newNumber.next;
      l2 = l2.next;
      remainder = 1;
    }
  }
  if (remainder === 1) {
    newNumber.next = new ListNode(1, null);
  }
  return dummy.next;
};

const list1 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9)))
);
const list2 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9)))
);

console.log(addTwoNumbers(list1, list2));
