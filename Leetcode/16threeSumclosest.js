// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

var threeSumClosest = function (nums, target) {
  let sum = Infinity; //creating an answer sum to save the closest value
  nums.sort((a, b) => a - b); //sorting the original array in ascending order
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1; //j = left creating the second searching parameter that will move from the left hand side
    let k = nums.length - 1; //k = right creating the third searching parameter that will move from the right hand side
    while (j < k) {
      if (
        Math.abs(nums[i] + nums[j] + nums[k] - target) < Math.abs(sum - target)
      ) {
        //if it is closer than the current sum, make it the current sum
        sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          return sum;
        }
      }
      if (nums[i] + nums[j] + nums[k] > target) {
        //if it is greater than the target move the k element one step closer
        k--;
      } else {
        //if the sum is less than the target move the left indicator in by 1
        j++;
      }
    }
  }
  return sum;
};

let target = 1;
let test = [0, 0, 0];
console.log(threeSumClosest(test, target));
