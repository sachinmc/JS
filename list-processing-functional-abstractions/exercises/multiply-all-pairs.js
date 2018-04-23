function multiplyAllPairs(array1, array2) {
  var result = [];

  array1.forEach(function (num1) {
    array2.forEach(function (num2) {
      result.push(num1 * num2);
    });
  });

  return result.sort(function compare(a, b) {
    return a - b;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
