function doubleConsonants(string) {
  var regex = /[aeiou\d\s\-]/;
  var strArr = string.split('');
  var result = '';

  for(i = 0; i < strArr.length; i += 1) {
    if (regex.test(strArr[i])) {
      result += strArr[i];
    } else {
      result += strArr[i] + strArr[i];
    }
  }

  return result;
}

//also try without regex

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
