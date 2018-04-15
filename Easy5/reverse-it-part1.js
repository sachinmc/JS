function reverseSentence(words) {
  var wordArr = words.split(' ');

  return wordArr.reverse().join(' ');
}

//split words based on space
//reverse array and join with space
//or iterate through array backwards and +

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
