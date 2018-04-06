//ASCII table translations:
//'a' - 97 , 'z' - 122
//'A' - 65 , 'Z' - 90

function rot13(string) {
  var asciiNumeric;
  var result = '';
  var i;

  for (i = 0; i < string.length; i++) {
    if (string[i] >= 'a' && string[i] <= 'z') {
      asciiNumeric = string.charCodeAt(i) + 13;

      if (asciiNumeric > 122) {
        asciiNumeric = 96 + (asciiNumeric - 122)
      }

      result += String.fromCharCode(asciiNumeric);
    } else if (string[i] >= 'A' && string[i] <= 'Z') {
      asciiNumeric = string.charCodeAt(i) + 13;

      if (asciiNumeric > 90) {
        asciiNumeric = 64 + (asciiNumeric - 90)
      }

      result += String.fromCharCode(asciiNumeric);
    } else {
      result += string[i];
    }
  }

  return result;
}

var string = 'Teachers open the door, but you must enter by yourself.'
console.log(rot13(string));
console.log(rot13(rot13(string)));
