// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
};

//solving the problem faster mathematically without all of the computation
var countOdds = function (low, high) {
  let distance = high - low;
  if (low & (2 === 0) && high % 2 == 0) {
    return distance / 2;
  } else if (
    (low % 2 == 0 && high % 2 != 0) ||
    (low % 2 != 0 && high % 2 == 0)
  ) {
    return Math.ceil(distance / 2);
  } else {
    return distance / 2 + 1;
  }
  return count;
};

let countOdds2 = function (low, high) {
  if (low % 2 == 0) {
    low++;
  }
  return Math.floor((high - low) / 2) + 1;
};

console.log(countOdds2(4, 9));
