function push(array, val) {
  array[array.length] = val;
  return array.length;
}

var count = [0, 1, 2];
push(count, 3);
count;
