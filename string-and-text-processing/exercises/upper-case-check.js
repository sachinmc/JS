function isUppercase(string) {
  return /^([! \d]*[A-Z][! \d]*)*$/.test(string);
}

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
console.log(isUppercase('4444'));            // true x
console.log(isUppercase('!!!!'));            // true x
