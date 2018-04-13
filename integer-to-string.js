function integerToString(number) {
  var DIGITS = ['0','1','2','3','4', '5','6','7','8','9'];
  var result = '';

  do {
    remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while(number > 0);

  return result;


  /*
  do {
    count += 1;
    numberCopy = Math.floor(numberCopy / 10);
  } while (numberCopy != 0);

  divisor = Math.pow(10, count - 1);

  do {
    quotient = Math.floor(number / divisor);
    number = number % divisor;
    result += DIGITS[quotient];
    divisor /= 10;
  } while (divisor >= 1);

  return result;
  */
}

function signedIntegerToString(number) {
  if (number < 0) {
      return '-' + integerToString(-number);
  } else if (number > 0) {
    return '+' + integerToString(number);
  }

  return integerToString(number);
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));       // "0"
