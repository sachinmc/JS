


// input, is a string (plain text) and a number (key)
// output should be the shifted value

// rules
// letter substitued by a letter located a given number of positions in the alphabet
// shifted position also referred to as the key
// cipher only encrypts letters, both upper and lower case
// substituted letters are in the same letter case as the original letter
// if key value exceeds length of alphabet, it wraps from the beginning

// explicit:
// create an array of alphabets indexed from 0 to 25.
// split the input string into an array of characters
// iterate through the input string array
// match character from input string array to alphabet array
// retrieve index of alphabet array, add key value to it
// return the new alphabet value indexed in the alphabet array
// if key value is > 25
// then return new key value = key value - 25, 28 - 25 = 3
// append new alphabet values to a cipherText string
// if character from input array is not an alphabet, skip referencing and
// append to cipherText string
// return cipherText string

// datastructure choice: array, for iteration, accessing values based on index, filtering etc
//

// algorithm:
// create an array of alphabets. ['a', 'b', 'c', ...]
// split the input string into array of characters
// forEach charArray ... func char
// if char is a string
// alphabets.indexOf(char.lowercase()) => index
// index = index + key
// if key > 25, index = index - 25;
// if char.toUpperCase() === char
// cipherText += alphabets[key].toUpperCase();
// else, cipherText += alphabets[key];
// else if char is not a string
// cipherText += char
// after iteration, return cipherText (ciphertext)


// could use additional functional abstraction
// for example, encryption could be move to a function 
function caesarEncrypt(string, key) {
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var charArray = string.split('');
  var cipherText = '';
  var index;

  charArray.forEach(function (char) {
    if (/[a-zA-Z]/.test(char)) {
      index = alphabets.indexOf(char.toLowerCase());

      index += key;
      if (index >= 26) {
        index -= 26;
      }

      if (char.toUpperCase() === char) {
        cipherText += alphabets[index].toUpperCase();
      } else {
        cipherText += alphabets[index];
      }

    } else {
      cipherText += char;
    }
  });

  console.log(cipherText);
}



// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

//// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

//// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

//// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
