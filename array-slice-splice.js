/*
slice:

The values of begin and end will always be integers greater than or equal to 0.
If the value of begin or end is greater than the length of the array, set it to equal the length.

*/

function slice(array, begin, end) {
  var newArr = [];

  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  for(i = begin; i < end; i++) {
    newArr[newArr.length] = array[i];
  }

  return newArr;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

var arr = [1, 2, 3];
slice(arr, 1, 3);                     // [2, 3]
arr;                                  // [1, 2, 3]

/*
splice:

The values of start and deleteCount will always be integers greater than or equal to 0.
If the value of start is greater than the length of the array, set it to equal the length.
If the value of deleteCount is greater than the number of elements from start up to the end
of the array, set deleteCount to the difference between the array's length and start.
*/


function splice(array, start, deleteCount) {
  var newArr = [];
  var i;

  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  //splicing array, returning result into new array
  for (i = 0; i < deleteCount; i++) {
    newArr[i] = array[i + start];
  }

  //rewriting array to account for splice
  for (i = start; i < deleteCount; i++) {
    array[i] = array[i + deleteCount];
  }

  //adding new elements, from start index onwards
  if (arguments.length > 3) {
    for(i = 0; i < arguments.length - 3; i++) {
      //if (deleteCount === 0) {}
      array[i + start] = arguments[i + 3];
    }
  } else {
    array.length = array.length - deleteCount; // is this needed ?
  }

  return newArr;
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

var arr = [1, 2, 3];
splice(arr, 1, 1, 'two');             // [2]
arr;                                  // [1, "two", 3]

var arr = [1, 2, 3];
splice(arr, 1, 2, 'two', 'three');    // [2, 3]
arr;                                  // [1, "two", "three"]

//pending from here on downwards
var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
arr;                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
arr;                                  // ["a", 1, 2, 3]
