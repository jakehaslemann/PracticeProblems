function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; // edge case

  let prefix = strs[0]; // initialize prefix as first string

  for (let i = 1; i < strs.length; i++) {
    // loop through all strings starting from second one
    while (strs[i].indexOf(prefix) !== 0) {
      // if prefix is not a prefix of current string
      prefix = prefix.substring(0, prefix.length - 1);
      // remove last character from prefix
      // if prefix becomes empty, return empty string
      if (prefix === "") return prefix;
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
