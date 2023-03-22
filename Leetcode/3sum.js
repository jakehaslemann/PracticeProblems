// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);//sorting the numbers from ascending to descending
  let answer = [];//creating a blank array to return as the answer

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {//if the first number is not equal to the number before it (remove duplicates)
      let j = nums.length - 1;//setting j t be the last number in the array
      let k = i + 1;//setting k to be 1 greater than i 
      while (k < j) {//until the two shifting parameters j and k intersect
        if (nums[i] + nums[j] + nums[k] === 0) {//if the numbers combined = 0 then add it to the array
          answer.push([nums[i], nums[j], nums[k]]);
          while (nums[k] == nums[k + 1]) {//iterates through k while it is next to a duplicate
            k++;
          }
          while (nums[j] == nums[j - 1]) {//iterates through j while it is next to a duplicate
            j--;
          }
          j--;
        }
        if (nums[i] + nums[j] + nums[k] > 0) {
          j--;
        }
        if (nums[i] + nums[j] + nums[k] < 0) {
          k++;
        }
      }
    }
  }
  return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
