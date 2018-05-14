/*
Different from built-in methods in that:
It should accept either a string or an array as an argument.
It should return a new string or array.
*/

function reverse(inputForReversal) {
  var string = '';
  var array = [];
  var i;

  for(i = inputForReversal.length - 1; i >= 0 ; i -= 1) {
    if (typeof inputForReversal === 'string') {
      string += inputForReversal[i];
    } else {
      array.push(inputForReversal[i]);
    }

  }

  if (string === '') {
    return array;
  } else {
    return string;
  }

}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

var array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
