function splitString(string, delimiter) {
  var result = '';

  if (delimiter == undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter == '') {
    for (var i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
    return;
  }

  for (var i = 0; i < string.length; i++) {
    if (string[i] == delimiter) {
      console.log(result);
      result = '';
    } else if (delimiter == '') {
      console.log(string[i]);
    } else {
      result += string[i];
    }
  }

  if (result) {
    console.log(result);
  }
}

/*
  iterate through the string
  store each character in result
  return result when you hit the delimiter
  reset result and repeat

  splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o


*/
