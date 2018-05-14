function substring(string, start, end) {
  var i;
  var len;
  var result = '';
  var temp;
  var offset;

  if (end == undefined) {
    end = string.length;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (start < 0 || typeof start !== 'number') {
    start = 0;
  }

  if (end < 0 || typeof end !== 'number') {
    end = 0;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  offset = start;
  len = end - start;

  for (i = 0; i < len; i++) {
    result += string[i + offset];
  }

  return result;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
