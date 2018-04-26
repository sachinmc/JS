// input: word string
// output: boolean

// collection of spelling blocks
// cannot use both letters from any given block
// can only use each block once
// return true if input word can be spelled with the block, false otherwise
// consider letters to be case insensitive when you apply the rules

// test cases, given

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true


// data structure
// object

function isBlockWord(word) {
  var includesKey;
  var includesVal;
  var wordArray;
  var countLen = 0;
  var blocks = {
    B:'O',   X:'K',   D:'Q',   C:'P',   N:'A',
    G:'T',   R:'E',   F:'S',   J:'W',   H:'U',
    V:'I',   L:'Y',   Z:'M',
  };

  var keys = Object.keys(blocks);

  keys.forEach(function (key) {
    wordArray = word.toUpperCase().split('');
    includesKey = wordArray.some(char => char === key);
    includesVal = wordArray.some(char => char === blocks[key]);

    if (includesKey) {
      countLen += 1;
    } else if (includesVal) {
      countLen += 1;
    }
  });

  return countLen === word.length;
}

// retrieve object keys and values
// iterate through object keys / values
// if key is a member of word
//  - increment counter
// else if value is member of word
// - increment counter
// compare counter to word length,
// if equal , then return true
// else return false

// here definition is given, but no rules
// *** Try solving this with array datastructure [...]
// modify above without Array.prototype.some() // create your own function 
