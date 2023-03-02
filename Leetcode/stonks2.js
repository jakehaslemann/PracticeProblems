function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

console.log(maxProfit([2, 10, 1, 5, 6, 7]));
console.log(Math.min.apply(Math, [2, 10, 1, 5, 6, 7]));
