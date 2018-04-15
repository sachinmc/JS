function reverseWords(words) {
  var wordArr = words.split(' ');
  var result = [];
  var i;

  for(i = 0; i < wordArr.length; i += 1) {
    result.push(reverseWord(wordArr[i]));
  }

  return result.join(' ');
}

function reverseWord(word) {
  if (word.length > 4) {
    return word.split('').reverse().join('');
  }

  return word;
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
