function repeatedCharacters(string) {
  var obj = {};
  var strArr = (string.toLowerCase()).split('');

  for (i = 0; i < strArr.length; i++) {
    if (!obj[strArr[i]]) {
      obj[strArr[i]] = 0;
    }

    obj[strArr[i]] += 1;
  }

  for (property in obj) {
    if (obj[property] < 2) {
      delete obj[property];
    }
  }

  return obj;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
