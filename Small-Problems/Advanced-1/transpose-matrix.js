// 3 x 3 matrix, swap rows and columns
function transpose(matrix) {
  var i;
  var j;
  var subArray = [];
  var newMatrix = [];

  for (j = 0; j < matrix.length; j += 1) {
    for (i = 0; i < matrix.length; i += 1) {
      subArray.push(matrix[i][j]);
    }
    newMatrix.push(subArray);
    subArray = [];
  }

  return newMatrix;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// iterate through the array, create a new array with first element of each sub array
// array[i][0]
// then a new array with second element of each sub array
// and finall a new array with third element of each sub array
// return these new arrays in an array.
