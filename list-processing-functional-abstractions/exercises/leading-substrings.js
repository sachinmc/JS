function substringsAtStart(string) {
  return string.split('').map(function (char, idx, strArr) {
    return strArr.slice(0, idx + 1).join('');
  });
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
