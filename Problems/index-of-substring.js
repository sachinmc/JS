function indexOf(firstString, secondString) {
  var string = '';
  var returnIndex;
  var indexstr1 = 0; //for tracking (previous position)
  var i;
  var j;

  for (i = 0; i < secondString.length; i++) {
    for (j = indexstr1; j < firstString.length; j++) {
      if (firstString[j] == secondString[i]) {
        returnIndex = returnIndex == undefined ? j : returnIndex;
        string += firstString[j];
        indexstr1 = j + 1;
        break;
      } else if (returnIndex != undefined) {
        string = '';
        returnIndex = undefined;
        i = 0;
        break;
      }
    }
  }

  if (string == secondString) {
    return returnIndex;
  } else {
    return -1;
  }

}

function lastIndexOf(firstString, secondString) {
  var index = indexOf(firstString, secondString);
  var lastIndex;
  var returnIndex;
  var string = '';
  var i;
  var j;

  if (index == -1) {
    return -1;
  }

  lastIndex = index + secondString.length;

  for (i = 0; i < secondString.length; i++) {
    for (j = lastIndex; j < firstString.length; j++) {
      if (firstString[j] == secondString[i]) {
        returnIndex = returnIndex == undefined ? j : returnIndex;
        string += firstString[j];
        lastIndex = j + 1;
        break;
      } else if (returnIndex != undefined) {
        string = '';
        returnIndex = undefined;
        i = 0;
        break;
      }
    }
  }

  if (returnIndex == undefined) {
    return index; // second substring not found
  } else {
    return returnIndex;
  }
}

/* simpler solution */

function indexOf(string, substring) {
  var substringLen = substring.length;
  var result = '';
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < substring.length; j++) {
      result += string[i + j]; //i is the offset, j is the substring length.
    }
    if (result == substring) {
      return i;
    } else {
      result = '';
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
