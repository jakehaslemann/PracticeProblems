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

var longestPalindrome = function (s) {
  let longPal = "";
  let tempLong = "";
  //go through the string comparing
  if (s.length === 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    let distance = 0;
    //check if next one is equal
    //if not increase outwards by 1
    //if it is equal increase outwards by 1 skipping the next one
    //check next ones out from center using a while loop

    while (s[i - distance] === s[i + distance + 1] && distance < s.length) {
      tempLong = s.substring(i - distance, i + distance + 2);
      if (tempLong.length > longPal.length) {
        longPal = tempLong;
      }
      distance++;
    }

    distance = 0;

    while (s[i - distance] === s[i + distance] && distance < s.length) {
      tempLong = s.substring(i - distance, i + distance + 1);
      if (tempLong.length > longPal.length) {
        longPal = tempLong;
      }
      distance++;
    }
  }
  return longPal;
};
console.log(longestPalindrome("ccc"));
