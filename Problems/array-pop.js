function pop(array) {
  var lastElement;

  lastElement = array[array.length - 1]
  array.length = array.length - 1;
  return lastElement;
}

var count = [1, 2, 3];
pop(count);
count;
