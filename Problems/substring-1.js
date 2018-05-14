// Write a function that returns a substring of a string based on
// a starting index and length.

function substr(str, start, length) {
  var i;
  var result = '';
  var counter = 0;

  if (start < 0) {
    start = str.length + start;
  }

  if (length > str.length) {
    length = str.length - start;
  }

  for (i = start; counter < length; i++) {
    result += str[i];
    counter += 1;
  }

  return result;
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
