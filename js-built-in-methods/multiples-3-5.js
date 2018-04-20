function myFilter(array, func) {
  var result = [];

  array.forEach(function (value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

function multiplesOfThreeOrFive(array) {
  return myFilter(array, function (value) {
    return value % 3 === 0 || value % 5 === 0;
  });
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
