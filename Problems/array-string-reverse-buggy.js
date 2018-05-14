/*
Buggy Code
*/

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var length = inputForReversal.length;
  var i;

  for (i = 0; i < length; i += 1) {
    reversed[length - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split(' '); // use empty string
  return reverseArray(stringArray).join(' '); // use empty string
}

/*
Fixed code
*/

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var length = inputForReversal.length;
  var i;

  for (i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));            // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
