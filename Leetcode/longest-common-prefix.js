// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  //need to compare the first values of each word, if one does not match then return the current longest string
  var longestPrefix = "";
  //loop through and check the first values of the string. if one does not match then return longestPrefix
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j].charAt(i) === strs[j + 1].charAt(i)) {
      } else {
        return longestPrefix;
      }
    }
    longestPrefix = longestPrefix + strs[0].charAt(i);
  }
  return longestPrefix;
};

//attempting a second solution using a set function instead
var longestCommonPrefixSet = function (strs) {
  const tempPrefix = new Set();
    var longestPrefix = "";
    
    //creating a set will make it so that the first letters that are duplicated will be taken 
  for (let i = 0; i < strs[0].length; i++) {
    for (let string of strs) {
      tempPrefix.add(string.charAt(i));
      if (tempPrefix.size > 1) {
        return longestPrefix;
      }
    }
    longestPrefix += strs[0].charAt(i);
    tempPrefix.clear();
  }
  return longestPrefix;
};



console.log(longestCommonPrefixSet(["flower", "flow", "flight"]));