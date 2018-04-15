function reverseNumber(number) {
  var result = '';
  var strNum = String(number);

  for(i = strNum.length - 1; i >= 0 ; i -= 1) {
    result += strNum[i];
  }

  return Number(result);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
