function lastIndexOf(array, val) {
  var i;

  for (i = array.length; i >=0; i -= 1) {
    if (array[i] === val) {
      return i;
    }
  }

  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1
