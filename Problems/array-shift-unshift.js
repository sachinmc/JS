function shift(array) {
  var arrLen = array.length;
  var shiftElement;

  if (arrLen === 0) return undefined;

  shiftElement = array[0];
  for (i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }

  array.length = arrLen - 1;
  return shiftElement;
}

function shift(array) {
  if (array.length === 0) return undefined;
  return array.splice(0, 1)[0];
}

function unshift(array) {
  var i;
  var j;

  for(i = 1; i < arguments.length; i++) {
    for(j = array.length; j > 0; j -= 1) {
      array[j] = array[j - 1];
    }
    array[0] = arguments[i];
  }

  return array.length;
}



shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

var testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
