function wordSizes(string) {
  var strArr = string.split(' ');
  var obj = {};

  if (string === '') {
    return obj;
  }

  for(i = 0; i < strArr.length; i += 1) {
    wordLen = strArr[i].length;

    if (!obj[wordLen]) {
      obj[wordLen] = 1;
    } else {
      obj[wordLen] += 1;
    }

  }

  return obj;
}

//another solution:

function wordSizes(words) {
  var wordsArray = words.split(' ');
  var count = {};
  var wordSize;
  var i;

  for(i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;

    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes(''));                                            // {}
