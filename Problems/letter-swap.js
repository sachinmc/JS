/* This swaps every word
function swap(string) {
  var strArr = string.split(' ');
  var result;

  result = strArr.map(element => reverseWord(element));

  return result.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}
*/

//swap just first and last letters of a word

function swap(string) {
  var strArr = string.split(' ');
  var result = [];
  var i;

  for(i = 0; i < strArr.length; i += 1) {
    result.push(swapFirstAndLast(strArr[i]));
  }

  return result.join(' ');
}

function swapFirstAndLast(string) {
  if (string.length === 1) {
    return string;
  }
  
  return string[string.length - 1] + string.slice(1, -1) + string[0];
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
