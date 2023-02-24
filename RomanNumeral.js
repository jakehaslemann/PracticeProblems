var romanToInt = function (s) {
  var number = 0;

  for (let i = 0; i < s.length; i++) {
    // for (let j = 0; j < 7; j++) {
    if (
      convertRomanToInteger(s.charAt(i)) <
      convertRomanToInteger(s.charAt(i + 1))
    ) {
      number =
        number +
        (convertRomanToInteger(s.charAt(i + 1)) -
          convertRomanToInteger(s.charAt(i)));
      i++;
    } else {
      number = number + convertRomanToInteger(s.charAt(i));
    }
    // }
  }
  return number;
};

var convertRomanToInteger = (z) => {
  if (z === "I") {
    return 1;
  } else if (z === "V") {
    return 5;
  } else if (z === "X") {
    return 10;
  } else if (z === "L") {
    return 50;
  } else if (z === "C") {
    return 100;
  } else if (z === "D") {
    return 500;
  } else if (z === "M") {
    return 1000;
  }
  return 0;
};

console.log(romanToInt("MCMXCIV"));
