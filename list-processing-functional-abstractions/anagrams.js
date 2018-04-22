function anagram(word, list) {
  function compareStr(word, item) {
    return word.split('').sort().join('') === item.split('').sort().join('');
  }

  var sameLenStr = list.filter(function (item) {
    return word.length === item.length;
  });

  var anagram = sameLenStr.filter(function (item) {
    return compareStr(word, item);
  });

  return anagram;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
