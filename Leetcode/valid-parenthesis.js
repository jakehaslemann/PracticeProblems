// Check for each object to see if it matches the next characters opposite
// now realizing that the problem needs to extend all of the way out through the whole string.
//now need to create a way to check further down inside. this is going to get ugly

//this is a terrible way to do this, but it works.

//need to account for the case where length is 1
var isValid = function (s) {
  //convert the string to an array "parenthesis"
  const parenthesis = [];

  for (let i = 0; i < s.length; i++) {
    parenthesis[i] = s.charAt(i);
  }

  //accounting for an odd number of inputs
  if (parenthesis.length % 2 != 0) {
    return false;
  }

  //setting a constant to be the beginning value of the code
  const startLength = parenthesis.length / 2;
  // compare the beginning value to the next value and remove if it is a match
  //need to use nested for loops for this problem
  for (let j = 0; j < startLength; j++) {
    for (let i = 0; i < parenthesis.length; i++) {
      if (opposite(parenthesis[i]) === parenthesis[i + 1]) {
        parenthesis.splice(i, 2);
        break;
      }
    }
  }
  //check if parenthesis is now empty. if it is empty then return true, if it is not empty return false
  if (parenthesis.length == 0) {
    return true;
  } else {
    return false;
  }
};

//getting the opposite side based on an input
var opposite = (z) => {
  if (z === "(") {
    return ")";
  } else {
    if (z === "[") {
      return "]";
    } else {
      if (z === "{") {
        return "}";
      } else {
        return 0;
      }
    }
  }
};
// this returns the opposite of "(,[,{" as "),],}" respectively.
console.log(isValid("))"));
console.log(opposite(")"));


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