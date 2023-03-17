// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104
//this solution is o(n^2) as it is going to have a double nested for loop
var merge = function (intervals) {
  //create a new array to return at the end that will hold the proper indices
  var simpInt = [];
  intervals.sort((a, b) => a[0] - b[0]);
  //create a loop to go through each value of intervals
  for (let int of intervals) {
    //compare if the first value of the second one is less than the second value of the first one

    if (simpInt.length === 0) {
      simpInt.push(int);
    }
    for (let i = 0; i < simpInt.length; i++) {
      if (int[0] <= simpInt[i][1] && int[1] >= simpInt[i][0]) {
        if (int[0] < simpInt[i][0]) {
          //if the first value of the second is less than the first value of the first
          simpInt[i][0] = int[0];
        }
        if (int[1] > simpInt[i][1]) {
          simpInt[i][1] = int[1];
        }
        break;
      } else if (i === simpInt.length - 1) {
        simpInt.push(int);
        break;
      }
    }
  }
  return simpInt;
};

//time complexity o(n log n)
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //sorting the given array with ascending values based on the first value. this ensures that the lowest value is at the beginning of the array and you dont need to go back and check the next values after checking the one
  var simpInt = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (simpInt[simpInt.length - 1][1] >= intervals[i][0]) {
      simpInt[simpInt.length - 1][1] = Math.max(
        simpInt[simpInt.length - 1][1],
        intervals[i][1]
      );
    } else {
      simpInt.push(intervals[i]);
    }
  }
  return simpInt;
};
