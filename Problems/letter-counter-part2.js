function wordSizes(words) {
  var wordsArray = words.split(' ');
  var count = {};
  var wordSize;
  var i;

  for(i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].replace(/\W/, '').length;

    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
