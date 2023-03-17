// 217. Contains Duplicate
// Easy
// 8.5K
// 1.1K
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

var containsDuplicate = function (nums) {
  let map = new Map(); //creating a new map to use as if the length of the map is not equal to the length of the array then you know there was at least one duplicate
  for (let num of nums) {
    //adding the elements of nums to the map
    map.set(num);
  }
  return nums.length === map.size ? false : true; //checking if the map size is equal to the original array size (no duplicates), if it is less than there are duplicates
};

function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }

  return false;
}

containsDuplicate([1, 2, 2, 3]);
