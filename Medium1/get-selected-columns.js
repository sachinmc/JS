function getSelectedColumns(array, selection) {
  var i;
  var j;
  var arrEle;
  var innerArray = [];
  var outerArray = [];

  for (i = 0; i < selection.length; i += 1) {
    innerArray = [];
    for (j = 0; j < array.length; j += 1) {
      arrEle = array[j]; //retrieve the array
      innerArray.push(arrEle[selection[i]]); //retrieve the column
    }

    outerArray.push(innerArray);
  }

  return outerArray;
}

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     //  [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2, 2], [3, 3, 3]]
