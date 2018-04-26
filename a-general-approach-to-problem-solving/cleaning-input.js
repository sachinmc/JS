// *** Understand the Problem ***

// Input and Output
// input: string digits, it may also contain  ' ', _, ., ( )
// output: string digits only, and '0000000000' for bad numbers (10 zeros)

// Definition and Rules (rules could be explicit or implicit)
// special characters in digits should be ignored.
// if the phone number is invalid, then return a string of 10 zeroes
//  - if phone number is less than 10 digits
//  - if the phone number is 11 digits and the first digit is not 1
//  - if the phone number is more than 11 digits
// if the phone number is 11 digits and the first digit is 1
//  - trim the 1 and use the remaining 10 digits
// if the phone number is 10 digits, then it is valid

// zoom into how to check if a number is valid or not

// Emphasis on non-technical language here, focus on interpreting the
// requirements, not on coming up with a solution

// in this case the rules are implicit, it doesn't tell us exactly how to check
// the validity of a number.

// To help come up with explicit rules, we can work through an example by hand
// and try and generalize it.

// The rules to check for validity of the number
// - if the length of the digits is greater than 11 or less than 10 return invalid number
// - if length of digits is equal to 11:
//   - and first digit is not 1, return invalid number
//   - if the first digit is 1, trim 1 and return remaining digits
// - after the first 2 steps you will be left with a valid number, return this number.


// *** Examples and Test Cases ***

// Generic test cases:
// (122)533-452-343 // more than 11 digits
// 134-15-125 // less than 10 digits
// (7)589-239.4012 // 11 digits, 1st number not 1
// (1)859-385-9028 // 11 digits, 1st number is 1
// (775)838-1810; // a 10 digit number

// Edge cases:
// 0000000000 // 10 digits, but invalid string
// (_.)(----) // no digits, handle empty string

/*
console.log(cleanNumber('(122)533-452-343')); // '0000000000'
console.log(cleanNumber('134-15-125')); // '0000000000'
console.log(cleanNumber('(7)589-239.4012')); // '0000000000'
console.log(cleanNumber('(1)859-385-9028')); // '8593859028'
console.log(cleanNumber('7758381810')); // '7758381810'
console.log(cleanNumber('0000000000')); // '0000000000'
console.log(cleanNumber('(_.)(-)(---)')); // '0000000000'
*/

// Use test cases to Understand the Requirements

// Use test cases to Generalize Requirement Breakdown


// *** Data structure and Algorithm ***

// Data Structure Choices
// Our primary concern: how do we represent data so that we can best utilize
// the built in methods of the programming language.

// reading through requirements breakdown, the key operations are:
//
// replace special characters from digits
// check the length of digits
// trim 1 from digits
// check first digit

// choice of working with a string means above operations will be easy to express.

// Algorithms:
// with this step our goal is to:
// - convert the input data into our data structure of choice
// - express steps to produce the outputs, using methods and abstractions
//   available on the data structure.

// replace special characters from digits with empty string.
// if replaced digits return empty string, return '0000000000'
// if length of digits is > 11 or less than 10
//  - return '0000000000'
// if length of digits === 11
//  - if first digit of digits is 1
//    - trim first digit and return digits / or return remaining digits without firt digit
//  - else return '0000000000'
// return digits
//

// The algorithm is a close translation of the requirements breakdown,
// but uses language that is much closer to JavaScript so that it will
// be easy to translate to code.

// After you finish writing your algorithm and before you start coding,
// it's a good practice to go over your test cases by hand to verify that
// your algorithm will work with all of them. This gives you a chance to fix
// any problems with your algorithm ahead of time, which lowers your risk of
// wasting time writing buggy code.

// *** Code ***

// write code from algorithm steps

function cleanNumber(string) {
  var validDigits = string.match(/\d+/g) || ['0000000000'];
  var invalidDigits = '0000000000';
  var length;

  validDigits = validDigits.join('');
  length = validDigits.length;

  if (length > 11 || length < 10) {
    return invalidDigits;
  }

  if (length === 11) {
    if (validDigits[0] === '1') {
      return validDigits.slice(1);
    } else {
      return invalidDigits;
    }
  }

  return validDigits;
}

// Run Test cases to Verify and Debug Code

console.log(cleanNumber('(122)533-452-343')); // '0000000000'
console.log(cleanNumber('134-15-125')); // '0000000000'
console.log(cleanNumber('(7)589-239.4012')); // '0000000000'
console.log(cleanNumber('(1)859-385-9028')); // '8593859028'
console.log(cleanNumber('7758381810')); // '7758381810'
console.log(cleanNumber('0000000000')); // '0000000000'
console.log(cleanNumber('(_.)(-)(---)')); // '0000000000'

// this assignment has definition + rules given

// *** try working solely with a string, think of using String.prototype.replace() ***
// handle the empty string
