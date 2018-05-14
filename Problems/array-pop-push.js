function pop(array) {
  var result;
  var len = array.length;

  if (array.length === 0) return undefined;

  result = array[len - 1];
  array.length = array.length - 1;

  return result;
}

function push() {
  var array = arguments[0];
  var argsLen = arguments.length;
  var arrLen = array.length;
  var arrEndIndex = arrLen - 1;

  for (i = 1; i < arguments.length; i++) {
    array[arrEndIndex + i] = arguments[i];
  }

  return array.length;
}


// pop
var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
