function repeat(string, times) {
  var result = '';

  if (typeof times !== 'number' || times < 0) return;
  if (times == 0) return '';

  while (times !== 0) {
    result += string;
    times -= 1;
  }

  return result;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
