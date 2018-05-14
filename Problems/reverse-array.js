function reverseArray(array) {
  var i;
  var j = 0;
  var result = [];
  for (i = array.length - 1; i >= 0; i--) {
    result[j] = array[i];
    j += 1;
  }

  return result;
}
