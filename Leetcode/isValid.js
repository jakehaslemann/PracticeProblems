function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    console.log({ stack }, i);
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      // push
    } else {
      // pop
      const top = stack.pop();
      console.log({ top }, i);
      if (char === ")" && top !== "(") {
        return false;
      } else if (char === "}" && top !== "{") {
        return false;
      } else if (char === "]" && top !== "[") {
        return false;
      }
    }
  }

  return stack.length === 0;
}
isValid("{{}[]}");
