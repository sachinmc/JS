function isXor(a, b) {
  a = Boolean(a);
  b = Boolean(b);
  if ((a == true && b == false) || (a == false && b == true)) {
    return true;
  }
  return false;
}

function isXor(a, b) {
  if (a && !b) return true;
  if (!a && b) return true;
  return false;
}

/*
The two exclamation points (!!) coerce the return value to a boolean value
(true or false). By default, logical operators return the value of the values
of the operands, not a boolean value. Without the !!, the function returns the
truthy (e.g., 'a' or 2) or falsy (e.g., '') values; the !! guarantees that the
result is boolean.
*/

function isXor(a, b) {
  return !!((a && !b) || (!a && b))
}

function isXor(a, b) {
  return Boolean(a) !== Boolean(b);
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
