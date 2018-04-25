function removeVowels(array) {
  return array.map(function (string) {
    return string.replace(/[aeiou]/ig, '');
  });
}

function removeVowels(array) {
  return array.map(string => string.replace(/[aeiou]/ig, ''));
}

// using list processing:
function removeVowels(array) {
  return array.map(function (string) {
    return string.split('').filter(function (character) {
      return !/[aeiou]/i.test(character);
    }).join('');
  });
}

// not using regex at all!!
function removeVowels(array) {
  var VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return array.map(function (string) {
    return string.split('').map(function (character){
      if (VOWELS.indexOf(character) < 0) {
        return character;
      } else {
        return '';
      }
    }).join('');
  });
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
