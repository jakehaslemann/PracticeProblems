//Given an array of integers arr return true if the number of occurrences of each value in the array is unique or false otherwise
var uniqueOccurrences = function (arr) {
  //create an array to store the values of arr
  //create an array to store the frequency of the value in another array
  var values = [];
  var frequency = [];
  values[0] = arr[0];
  frequency[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let j = isUnique(arr[i], values);
    if (j < 0) {
      values[values.length] = arr[i]; //adds a new value at the end of array with correct value
      frequency[values.length - 1] = 1; // sets frequency at new value to be equal to 1;
    } else {
      frequency[j]++;
    }
  }

  //check to see if any of the values in the second array match
  for (let i = 0; i < frequency.length; i++) {
    if (isUniqueFreq(frequency[i], frequency, i) >= 0) {
      return false;
    }
  }
  return true;
};

//check to see if the number(z) is in the array and return the position
var isUnique = (z, values) => {
  for (let i = 0; i < values.length; i++) {
    if (z == values[i]) {
      return i;
    }
  }
  return -1;
};

//check to see if the frequency is unique
var isUniqueFreq = (z, frequency, j) => {
  for (let i = 1 + j; i < frequency.length; i++) {
    if (z == frequency[i]) {
      return i;
    }
  }
  return -1;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
