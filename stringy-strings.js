function stringy(number) {
  var i;
  var toggle = true;
  var result = '';

  for (i = 0; i < number; i++) {
    if (toggle) {
      result += '1'
      toggle = false;
      continue;
    }

    if (!toggle) {
      result += '0'
      toggle = true;
    }

  }

  return result;
}

function stringy(number) {
  var i;
  var result = '';

  for (i = 0; i < number; i++) {
    if(i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

function stringy(number) {
  var i;
  var result = '';

  for (i = 1; i <= number; i++) {
    result += i % 2;
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
