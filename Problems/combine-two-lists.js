function interleave(arrayOne, arrayTwo) {
  var result = [];
  var i;

  for(i = 0; i < arrayOne.length; i += 1) {
    result.push(arrayOne[i]);
    result.push(arrayTwo[i]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
