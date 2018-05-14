function wordCount(string) {
  var strArray;
  var item;
  var obj;
  var objKeys;

  obj = {};
  strArray = string.split(' ');

  for(i = 0; i < strArray.length; i += 1) {
    objKeys = Object.keys(obj);

    if (objKeys.indexOf(strArray[i]) === -1) {
      obj[strArray[i]] = 1;
    } else {
      obj[strArray[i]] += 1;
    }
  }

  return obj;
}

function wordCount(text) {
  var words = text.split(' ');
  var count = {};
  var word;
  var i;

  for(i = 0; i < words.length; i++) {
    word = words[i];

    if (!count[word]) {
      count[word] = 0;
    } 

    count[word] += 1;
  }

  return count;
}


console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
