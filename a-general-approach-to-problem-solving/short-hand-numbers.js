// input is a string
// output is an array of numbers

// input, is an array of numbers in short range notation
// only significant part of next number written
// the numbers are always increasing
// some input numbers will have different separators to depict range
//  - ['-', ':', '..']
// range limits are inclusive

// test cases:
// console.log(shortHand('1, 3, 7, 1, 8, 1, 4')); // [1,3,7,11,18,21,24], not valid range
console.log(shortHand('1..3, 1..2')); // [1,2,3,11,12]
console.log(shortHand('2:3, 2:4, 1:3')); // [2,3,12,13,14,21,22,23]
// console.log(shortHand('1..3, 7..0, 1..6')); // [1,2,3,7,8,9,10,11,12,13,14,15,16], not valid range

// edge cases:
// 2 digit ranges and higher .. ?
console.log(shortHand('1-7, 2-22')); 

// algorithm
// ...

// ['1','3','7','1','8','1','4']

function shortHand(rangeStr) {
  var rangeArray = rangeStr.split(',').map(function (str) {
    return str.split(/\.\.|[:-]/);
  }).map(function (array) {
    return array.map(Number)
  });

  var shortHandArr = rangeArray.map(function (array) {
    return expandRange(array);
  }).reduce((acc, curr) => acc.concat(curr));

  return completeNumber(shortHandArr);
}

function completeNumber(array) {
  var result = [];
  var prev = 0;

  array.forEach(function (number) {
    if (prev < number) {
      prev = number;
      result.push(prev);
    }

    if (prev > number) {
      do {
        prev += 1;
      } while (prev % 10 !== number);
      result.push(prev);
    }
  });

  return result;
}

function expandRange(array) {
  var result = [];
  var first;
  var last;

  first = array[0];
  last = array[array.length - 1];

  while (first <= last) {
    result.push(first);
    first += 1;
  }

  return result;
}

// first you have to expand the range
// then return a complete number array
