function multiplyList(arrayOne, arrayTwo) {
  var result = [];
  var i;

  for(i = 0; i < arrayOne.length; i += 1) {
    result.push(arrayOne[i] * arrayTwo[i])
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
