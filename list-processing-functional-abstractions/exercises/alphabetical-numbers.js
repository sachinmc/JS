function alphabeticNumberSort(array) {
  var alphabets =
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
   'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
   'seventeen', 'eighteen', 'nineteen'];

  var sortedAlphabets = alphabets;
  var obj = {};
  var i = 0;

   // building object
   alphabets.forEach(function (item) {
     obj[item] = array[i]
     i += 1;
   });

   return sortedAlphabets.sort().map(function (alphabet) {
     return obj[alphabet];
   });
}

// a better way to do this

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}

function wordSort(num1, num2) {
  var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
   'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
   'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

// same as above, except using a function expression as an argument to
// Array.prototype.sort()

function alphabeticNumberSort(array) {
  var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
   'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
   'seventeen', 'eighteen', 'nineteen'];

  return array.sort(function (num1, num2) {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
      return 1;
    } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
