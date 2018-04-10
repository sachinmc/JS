function uniqueElements(arr) {
  var uniques = [];
  var i;

  for (i = 0; i < arr.length; i += 1) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
