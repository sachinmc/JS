function sequence(num) {
  var index = 0
  var array = [];

  while (index < num) {
    array[index] = index + 1;
    index += 1;
  }

  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
