//Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

var fizzBuzz = function (n) {
  // create a string array to return
  const array = [];
  //loop through and add elements to the array using the fnction translate
  for (let i = 0; i < n; i++) {
    array[i] = translate(i + 1);
  }
  return array;
};

//create a function to return the proper value of the string array

var translate = (z) => {
  if (z % 5 == 0 && z % 3 == 0) {
    return "FizzBuzz";
  } else if (z % 3 == 0) {
    return "Fizz";
  } else if (z % 5 == 0) {
    return "Buzz";
  } else {
    return z.toString(); //converts the number to string format.. much easier than using "" and plus signs
  }
};

console.log(fizzBuzz(15));
