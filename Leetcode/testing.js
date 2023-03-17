const factorial = (number) => {
  var fact = number;
  for (let i = number - 1; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(6));
