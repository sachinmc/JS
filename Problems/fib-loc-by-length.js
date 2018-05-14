function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var fibonacci;
  var index = 2;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74


/*
function fib(number) {
  var a = 1;
  var b = 1;
  var counter = 0;

  while (counter < number / 2) {
   console.log(a);
   console.log(b);
   a = b + a;
   b = b + a;
   counter += 1;
  }
}
*/
