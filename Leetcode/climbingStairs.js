// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//after drawing out a diagram i realized this is basically a fibonacci sequence with the first values slightly different
//recreating the fibonacci sequence from n=2 onward is an easy solution

//easy solution, not efficient. 23.61% and 57.66%
//dynamic programming breaks down the problem in to simpler steps
var climbStairs = function (n) {
  //declaring the first 3 values as they differ from a typical fibonacci sequence
  if (n < 3) {
    return n;
  }
  let numbers = [1, 2];
  for (let i = 2; i < n + 1; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2]; //using memoization to store the solution in to the array
  }
  return numbers[n];
};

//attempt #2 trying to calculate fibonacci sequence without having to index all of the numbers up to the one that needs to be returned
//using binets formula this should be much faster than before

//Fn = (const^n - (1-const)n)/sqrt5 where const = (1+sqrt5))/2
//this works very well, beating 80.3% and 94.41%
//the questions is how did people beat this.. is there a build in binets formula??
//sent in the formula multiple times. achieved effiency of 98.19% for run time.. so it is subjective to the random numbers thrown at it.
var climbStairs2 = function (n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return Math.floor((phi ** (n + 1) - (1 - phi) ** (n + 1)) / Math.sqrt(5));
};
console.log(climbStairs2(6));
