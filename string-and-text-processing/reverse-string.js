function reverse(string) {
  var strArr = string.split('');
  return strArr.reverse().join('');
}

//another solution:
function reverse(string) {
  var strArr = string.split('');
  var result = '';
  var i;

  for(i = strArr.length - 1; i > -1 ; i -= 1) {
    result += strArr[i];
  }

  return result;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
