// Given a string s, return the longest
// palindromic

// substring
//  in s.
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

let longestPalindrome = function (s) {
  let longest = 1;
  let left;
  let right;
  let start = 0;
  for (let i = 1; i < s.length; i++) {
    //check the case where the center is even
    left = i - 1;
    right = i;
    while (
      s.charAt(left) === s.charAt(right) &&
      left >= 0 &&
      right < s.length
    ) {
      if (right - left + 1 > longest) {
        longest = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
    //check the case where the center is odd
    left = i - 1;
    right = i + 1;
    while (
      s.charAt(left) === s.charAt(right) &&
      left >= 0 &&
      right < s.length
    ) {
      if (right - left + 1 > longest) {
        longest = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  return s.substring(start, start + longest);
};
console.log(longestPalindrome("babad"));