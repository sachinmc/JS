//changing array values as you iterate, not best practice(?)
function runningTotal(array) {
  var i;

  for(i = 1; i < array.length; i += 1) {
    array[i] = array[i] + array[i - 1];
  }

  return array;
}

function runningTotal(array) {
  var result = [];
  var sum = 0;
  var i;


  for(i = 0; i < array.length; i += 1) {
    result.push(sum += array[i]);
  }

  return result;
}

//using Array.prototype.map
function runningTotal(array) {
  var sum = 0;
  return array.map(function(element) {
    return sum += element;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
