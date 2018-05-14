function halvsies(array) {
  var len = array.length;

  if (len % 2 === 0) {
    return [array.slice(0, len/2), array.slice(len/2)];
  }

  return [array.slice(0, Math.ceil(len/2)), array.slice(Math.ceil(len/2))];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
