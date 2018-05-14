function trim(string) {
  var result = '';

  //clear left spaces
  for (var i = 0; i < string.length; i++) {
    if (string[i] == ' ' && result == '') {
      continue;
    }
    result += string[i];
  }

  string = result;
  result = '';

  //clear right spaces
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] == ' ' && result == '') {
      continue;
    }
    result = string[i] + result;
  }

  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""


/*

start from L 2 R, skip characters until the first non space
add non space to result and all following characters

start from R 2 L, skip characters until the first non space
add non space to result and all following characters

*/
