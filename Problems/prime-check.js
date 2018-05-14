function isPrime(number) {
  var count = 2;

  if (number <= 1) {
    return false;
  }

  while (count < number) {
    if (number % count == 0) {
      return false;
    }
    count += 1;
  }

  return true;
}

function isPrime(number) {
  var divisor;

  if (number <= 1 || (number > 2 && number % 2 == 0)) {
    return false;
  }

  divisor = 3;

  while (divisor < number) {
    if (number % divisor == 0) {
      return false;
    }
    divisor += 1;
  }

  return true;

}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
