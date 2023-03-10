// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
// Check for each object to see if it matches the next characters opposite
const isValid = function (s) {
  //leaving the parameter as a string
  let parenthesis = "";
  for (let i = 0; i < s.length; i++) {
    console.log({ parenthesis });
    if (parenthesis.charAt(parenthesis.length - 1) === "(" && s[i] === ")") {
      parenthesis = parenthesis.slice(0, parenthesis.length - 1);
    } else if (
      parenthesis.charAt(parenthesis.length - 1) === "[" &&
      s[i] === "]"
    ) {
      parenthesis = parenthesis.slice(0, parenthesis.length - 1);
    } else if (
      parenthesis.charAt(parenthesis.length - 1) === "{" &&
      s[i] === "}"
    ) {
      parenthesis = parenthesis.slice(0, parenthesis.length - 1);
    } else {
      parenthesis = parenthesis.concat(s[i]);
    }
  }
  if (parenthesis.length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isValid("[{()()()}]"));


var isValid = function(s) {
    let par = "";
    for (i=0; i< s.length; i++) {
    if ( par[par.length -1] ==="(" && s[i] ===")") {par = par.substring(0, par.length-1)}
    else if ( par[par.length -1] ==="{" && s[i] ==="}") {par = par.substring(0, par.length-1)}
    else if ( par[par.length -1] ==="[" && s[i] ==="]") {par = par.substring(0, par.length-1)}
    else { par = par + s[i]}
    }
    if (par.length === 0) return true;
    return false;
};