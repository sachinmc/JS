function matrixSums(arr) {
  var result = [];
  var i;

  for(i = 0; i < arr.length; i++) {
    result.push(arr[i].reduce(reducer));
  }

  return result;
}

const reducer = (acc, sum) => acc + sum;

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
