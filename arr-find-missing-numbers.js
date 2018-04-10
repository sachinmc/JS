function missing(array) {
  var i;
  var val;
  var newArr = [];

  for(i = 0; i < array.length; i += 1) {
    val = array[i] + 1;
    if (val === array[i + 1]) continue;
    if (array[i + 1] === undefined) break;
    do {
      newArr.push(val);
      val += 1;
    } while (val != array[i + 1]);
  }

  return newArr;
}

function missing(array) {
  var result = [];
  var start = array[0] + 1;
  var end = array[array.length - 1];
  var integer;

  for (integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) < 0) {
      result.push(integer);
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
