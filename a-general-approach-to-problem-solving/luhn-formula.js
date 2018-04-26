// input is a number in string format : "2323 2005 7766 3554"
// output is boolean, true or false

// definitions and rules:
// ignore all non-numeric characters in input string
// count from rightmost digit of a partial number, move left, double the value of every second digit
// for any digit that has become 10 or more, substract 9 from it
// add all the digits of the partial number to return a total
// if the total ends in zero, then it is a Luhn number, otherwise it is not

// test cases:
// generic cases
// console.log(luhn("2323 2005 7766 3554")); // valid number
// console.log(luhn("8541 1919 6471 2311")); // invalid number

// edge cases
// luhn("2323  2005 7766  3554");
// luhn("2323200577663554");
// luhn("23232005776635549182");
// luhn("23232005754");
// luhn("2323-2005-7766-3554");

// data structure:
// array
// iterate

// match partial numbers of size 4 => return an array of size 4 strings
// iterate through the array,
//  split the partial number into digits
//    iterate through the digits array,
//    reduce the partial numbers to a total
//      convert digit string to a number, double the odd digit strings
//      if digit string is >= 10
//        substract 9 from digit string,
//      else, return digit
//
// end of main array iteration, you get an array of totals
// reduce array of totals
// if sum mod 10 === 0, it is valid Luhn
// else it is not a Luhn number

function luhn(numString) {
  var validNumStr = numString.replace(/\D/g, '');
  var numArray = validNumStr.split('').map(Number);
  var result = [];
  var doubled;
  var i;

  for (i = numArray.length - 2; i > -1; i -= 2) {
    doubled = numArray[i] * 2;
    if (doubled >= 10) {
      doubled -= 9;
    }
    result.unshift(numArray[i + 1]);
    result.unshift(doubled);
  }

  return result.reduce((acc, cur) => acc + cur) % 10 === 0;
}

console.log(luhn('2332')); // invalid
console.log(luhn('8763')); // valid
console.log(luhn('1111')); // invalid
console.log(luhn("2323 2005 7766 3554")); // valid
console.log(luhn("8541 1919 6471 2311")); // invalid

// console.log(luhn("2323 2005 7766 3554")); // valid number
// console.log(luhn("8541 1919 6471 2311")); // invalid number

// this assignment has definition + rules given 

// ** try by reversing the input digits and keeping track of odd index to double ***
