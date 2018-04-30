function transpose(matrix) {
  var numOfRows = matrix.length;
  var numOfCols = matrix[0].length;
  var newMatrix = [];
  var subArray = [];
  var i;
  var j;

  for (j = 0; j < numOfCols; j += 1) {
    for (i = 0; i < numOfRows; i += 1) {
      subArray.push(matrix[i][j]);
    }
    newMatrix.push(subArray);
    subArray = [];
  }

  return newMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// turn columns into rows and rows into columns
// iterate for number of rows - inner loop
// pick first element (1st column) from each row and add it to a new matrix
// this is first row of new matrix (push)
// pick second element from each row (2nd column) and add it to a new matrix
// this is the second row of new matrix (push)
// continue for number of columns - outer loop
