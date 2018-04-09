function concat(array1, array2) {
  var result = [];
  var i;

  for(i = 0; i < array1.length; i++) {
    push(result, array1[i]);
  }

  for(i = 0; i < array1.length; i++) {
    push(result, array2[i]);
  }

  return result;
}

function push(array, val) {
  array[array.length] = val;
  return array.length;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
