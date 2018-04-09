function slice(array, startIndex, endIndex) {
  var newArray = [];
  var i;
  var j = 0;

  for (i = startIndex; i < endIndex; i += 1) {
    newArray[j] = array[i];
    j += 1;
  }

  return newArray;
}

function slice(array, startIndex, endIndex) {
  var newArray = [];
  var i;

  for (i = startIndex; i < endIndex; i++) {
    push(newArray, array[i]);
  }

  return newArray;
}

function push(array, val) {
  array[array.length] = val;
  return array.length;
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]
