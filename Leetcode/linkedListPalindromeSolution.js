// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true; // empty or single-node list is a palindrome
  }

  // find length of list
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // push first half of nodes onto stack
  const stack = [];
  current = head;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    stack.push(current.val);
    current = current.next;
  }

  // compare remaining nodes with stack
  if (length % 2 !== 0) {
    // odd number of nodes, skip middle node
    current = current.next;
  }
  while (current) {
    if (current.val !== stack.pop()) {
      return false;
    }
    current = current.next;
  }

  return true;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(list1)); // Output: true

// const list2 = new ListNode(1, new ListNode(2));
// console.log(isPalindrome(list2)); // Output: false

// const list3 = new ListNode(1);
// console.log(isPalindrome(list3)); // Output: true

// const list4 = new ListNode(1, new ListNode(0, new ListNode(1)));
// console.log(isPalindrome(list4)); // Output: true