function toLowerCase(string) {
  var asciiNumeric;
  var result = '';

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
      result += String.fromCharCode(asciiNumeric);
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
