var isPalindrome = function (x) {
  const z = x.toString(); // changing the incoming number in to a string
  for (
    let i = 0;
    i < Math.floor(z.length / 2);
    i++ //math.floor to get rid of the center number if it is odd as that will always count as a palindrome
  ) {
    if (z.charAt(i) === z.charAt(z.length - i - 1)) {
      //checking if the string is a palindrome by comparing first number to last number and closing in towards middle
    } else {
      return false; //let the loop run and if it determines that there is an issue between two numbers returns true
    }
  }
  return true; // if it makes it through the loop then it is false
};
