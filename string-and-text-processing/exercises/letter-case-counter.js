function letterCaseCount(string) {
  var obj = {};
  var noCaps = string.match(/[a-z]/g);
  var caps = string.match(/[A-Z]/g);
  var none = string.match(/[^a-zA-Z]/g);

  obj['lowercase'] = noCaps !== null ? noCaps.length : 0;
  obj['uppercase'] = caps !== null ? caps.length : 0;
  obj['neither'] = none !== null ? none.length : 0;

  return obj;
}

// better
function letterCaseCount(string) {
  var lowerArray = string.match(/[a-z]/g) || [];
  var upperArray = string.match(/[A-Z]/g) || [];
  var neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
