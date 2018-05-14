function splice(array, startIndex, number) {
  var removedItems = [];
  var i;

  for (i = startIndex; i < array.length; i++) {
    if(i < startIndex + number) {
      push(removedItems, array[i])
    }

    array[i] = array[i + number];
  }

  array.length = array.length - number;

  return removedItems;
}

function push(array, val) {
  array[array.length] = val;
  return array.length;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));     // [ 3, 4, 5, 6, 7 ]
console.log(count);
