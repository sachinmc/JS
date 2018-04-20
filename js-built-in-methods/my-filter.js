/*
function myFilter(array, func) {
  var i;
  var newArray = [];

  for(i = 0; i < array.length; i += 1) {
    if (func(array[i]) === true) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
*/

function myFilter(array, func) {
  var result = [];

  array.forEach(function (value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
}

console.log(myFilter([{ a: 3, b: 4, c: 5 },
                      { a: 5, b: 12, c: 13 },
                      { a: 1, b: 2, c: 3 },], isPythagoreanTriple));
