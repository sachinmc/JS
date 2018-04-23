function substrings(string) {
  return string.split('').map(function (char, idx, strArr) {
    return substringsAtStart(strArr.slice(idx).join(''));
  }).reduce(function (acc, cur) {
    return acc.concat(cur);
  });
}

function substringsAtStart(string) {
  return string.split('').map(function (char, idx, strArr) {
    return strArr.slice(0, idx + 1).join('');
  });
}

// using String.prototype.substring()
function substrings(string) {
  return string.split('').map(function (char, idx) {
    return substringsAtStart(string.substring(idx));
  }).reduce(function (result, array) {
    return result.concat(array);
  });
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
