function myOwnEvery(array, func) {
  var i;

  for(i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

function areAllNumbers(array) {
  return myOwnEvery(array, function (value) {
    return typeof value === 'number' && !Number.isNaN(value);
  });
}

var isANumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value);
};

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
