/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var newArray = []; //declaring a newArray that will combine both of the arrays in to
  var i = 0; //iterator for the first array
  var j = 0; //iterator for the second array
  while (newArray.length < Math.floor((nums1.length + nums2.length) / 2 + 1)) {
    //cutting out half of the problem because you do not need the full array.
    if (nums1[i] < nums2[j] || j > nums2.length - 1) {
      //code will run forever without j>nums2.length-1
      newArray.push(nums1[i]); //adding first number to array if first array is smaller than second array
      i++;
    } else if (nums1[i] > nums2[j] || i > nums1.length - 1) {
      //adding second number to array if second array is smaller than first array
      newArray.push(nums2[j]);
      j++;
    } else if (nums1[i] === nums2[j]) {
      newArray.push(nums1[i]);
      i++;
    }
  }
  if ((nums1.length + nums2.length) % 2 == 0) {
    //determining what to return based on an odd or even number
    return (newArray[newArray.length - 2] + newArray[newArray.length - 1]) / 2;
  } else {
    return newArray[newArray.length - 1];
  }
};

//attempting again using concat and sort functions to combine the two arrays and sort them sequentially
var findMedianSortedArrays2 = function (nums1, nums2) {
  newArray = nums1.concat(nums2).sort((a, b) => a - b); //this handy snipet of code will sort an array ascendingly
  if (newArray.length % 2 == 0) {
    //median if theres an even number of entries
    return (
      (newArray[newArray.length / 2 - 1] + newArray[newArray.length / 2]) / 2
    );
  } else {
    //median if there is an odd number of entries
    return newArray[Math.floor(newArray.length / 2)];
  }
};
console.log(findMedianSortedArrays3([2, 2, 4, 4], [2, 2, 4, 4]));
