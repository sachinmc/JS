//The function takes a string of digits as an argument, and returns the
//appropriate number. Do not use any of the built-in functions for converting
//a string to a number type.

function stringToInteger(str) {
  var strArr = str.split('');
  var result = [];
  var sign = false;
  var obj;
  var num;
  var power;

  var length;

  length = strArr.length - 1;
  obj = {
    '0': 0,'1': 1,'2': 2,'3': 3,'4': 4,
    '5': 5,'6': 6,'7': 7,'8': 8,'9': 9,
  };

  for (i = 0; i <= length; i += 1) {
    num = obj[strArr[i]];
    power = length - i;
    result.push(num * Math.pow(10, power));
  }

  return result.reduce((acc, sum) => acc + sum);
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default: return stringToInteger(str);
  }
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
