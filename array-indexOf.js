function indexOf(array, val) {
  var index;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {
      index = i;
      break;
    }
  }

  return index == undefined ? -1 : index;
}

function indexOf(array, val) {
  var i;

  for(i = 0; i < array.length; i += 1) {
    if (array[i] === val) {
      return i;
    }
  }

  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1
