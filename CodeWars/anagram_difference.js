// compare each letter between two strings
// if there is a match, then slice/remove the letter from both strings
// (add it to a common letter array)
// restart comparison of two strings.
// continue until slice counter is false i.e, no more common letters

function anagramDifference(w1, w2) {
  let smallerWord = w1.length > w2.length ? w2 : w1;
  let largerWord = smallerWord === w1 ? w2 : w1;
  let commonArray = [];
  let counter = true;
  let i;
  let j;

  smallerWord = smallerWord.split('');
  largerWord = largerWord.split('');

  while (counter === true) {
    if (smallerWord.length === 0 || largerWord.length === 0) {
      break;
    }

    for (i = 0; i < smallerWord.length; i += 1) {
      for (j = 0; j < largerWord.length ; j += 1) {
        if (smallerWord[i] === largerWord[j]) {
          commonArray.push(smallerWord[i]);
          smallerWord.splice(i, 1);
          largerWord.splice(j, 1);
          counter = true;
          break;
        } else {
          counter = false;
        }
      }

      if (counter === true) {
        break;
      }
    }
  }

  return w1.length + w2.length - 2 * commonArray.length;
}

console.log(anagramDifference('codewars', 'hackerrank')); //10
console.log(anagramDifference("a","aab")); //2
console.log(anagramDifference("", "")); //0
