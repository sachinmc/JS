function oddElementsOf(arr) {
  var newArr = [];

  for(i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));  // returns [8, 16, 42]
