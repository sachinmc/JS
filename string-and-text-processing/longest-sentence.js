// Notes:
//
// if the separator is the last (or first) character in a string, then
// String.prototype.split('') will add an empty string, '', as the last element
// of the returned array.
//
// JS automatically sorts object properties in ascending order if they are
// numeric strings.

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  // first, separate all the sentences into an array
  // the separator will be a period '.'

  // then remove all non-word characters from the sentence
  // split the sentence into words array, count the words
  // store the word count and the sentence in an object

  // find the max of the object keys, return the value for that property
  // value is the sentence and property is the sentence count.

  var sentences = text.split('.');
  var sentenceAndCount = {};
  var longest;
  var keys;

  sentences = sentences.map(sentence => sentence.trim());

  sentences.forEach(function (sentence) {
    var result = parseSentence(sentence);
    var sentenceLength = result.split(' ').length;
    if (sentence !== '') {
      sentenceAndCount[sentenceLength] = sentence + '.';
    }
  });

  keys = Object.keys(sentenceAndCount);
  longest = keys.slice(-1)[0];

  console.log(sentenceAndCount[longest]);
  console.log('');
  console.log(`The longest sentence has ${longest} words.`)

  return '';
}

function parseSentence(sentence) {
  return sentence.replace(/([^a-z ])/ig, '');
}

console.log(longestSentence(longText));

// console output

// It is rather for us to be here dedicated to the great task remaining before
// us -- that from these honored dead we take increased devotion to that cause for
// which they gave the last full measure of devotion -- that we here highly resolve
// that these dead shall not have died in vain -- that this nation, under God, shall
// have a new birth of freedom -- and that government of the people, by the people,
// for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.
