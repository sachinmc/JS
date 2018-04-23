function sumOfSums(array) {
  var result = [];

  array.reduce(function (acc, curr) {
    result.push(acc + curr);
    return result[result.length - 1];
  }, 0);

  return result.reduce(function (acc, curr) {
    return acc + curr;
  });
}

// another solution
function sumOfSums(numbers) {
  return numbers.map(function (number, idx) {
    // result from slice: [[3], [3, 5], [3, 5, 2]]
    return numbers.slice(0, idx + 1).reduce(function (sum, value) {
      return sum + value;
    });
  }).reduce(function (sum, value) {
    return sum + value;
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
