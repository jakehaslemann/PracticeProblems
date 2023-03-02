// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfitSlow = function (prices) {
  //need to compare values in prices to determine the greatest difference between arrays.
  //create a variable for the maximum profit that could be obtained between the values in the array
  var profitMax = 0;
  //need to check the value of each number against the rest of the numbers in the array, will need nested for loops
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > profitMax) {
        profitMax = prices[j] - prices[i];
      }
    }
  }
    return profitMax;
    
    Math.max.apply(Math, prices)
};
//this works... but it is much too slow.. need to find a faster way
//possibly finding the smallest value and then the largest value thereafter?b ut that would not work if there was a larger difference before that
var maxProfit = function (prices) {
  //need to compare values in prices to determine the greatest difference between arrays.
  //create a variable for the maximum profit that could be obtained between the values in the array
  var profitMax = 0;
  var highestPrice = prices[prices.length - 1];
  //need to check the value of each number against the rest of the numbers in the array, will need nested for loops
  //maybe using Math.max and Math.min functions and slice function
    
    //instead of remembering the values going forward, if we work from the back of the array the order does not matter and you can strictly worry about the values. 
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > highestPrice) {
      highestPrice = prices[i];
    }
    if (highestPrice - prices[i] > profitMax) {
      profitMax = highestPrice - prices[i];
    }
  }

  return profitMax;
};

console.log(maxProfit([4, 2, 3, 1, 4, 5, 7]));
