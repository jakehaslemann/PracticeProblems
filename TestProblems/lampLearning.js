var uniqueOccurrences = function (arr) {
  let map = new Map();

  // Count frequency of each value in the array
  for (let i = 0; i < arr.length; i++) {
    console.log({ map });
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  // Check if all the frequencies are unique
  let freqSet = new Set(map.values());
  return freqSet.size === map.size;
};
uniqueOccurrences([1, 2, 3, 4, 5, 5]);

console.log(new Set([1, 2, 3, 4, 5, 5, 5, 4]));
