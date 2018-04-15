function repeater(string) {
  var i;
  var result = '';
  var strArr = string.split('');

  for (i = 0; i < strArr.length; i += 1) {
    result += strArr[i] + strArr[i];
  }

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
