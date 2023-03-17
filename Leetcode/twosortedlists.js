//* Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(); //keeps track of the beginning of the linked lists
  let tail = dummy;//will be the end of the linked list that we itterate through
  //dummy.next=tail
  //some kind of loop goes here
  while (list1 && list2) {
    //check the value of the next value of the first list
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
};
let test = function () {
  const dummy = new ListNode();
  return dummy;
};

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
const list2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(3)))
);
console.log(test());
