/*
Goldbach Conjecture:
You can express every even number greater than 2 as the sum of 2 primes
*/

function checkGoldbach(n) {
  var num = 2;
  var num1;
  var num2;

  if (n % 2 == 1 || n < 4) {
    console.log(null);
    return;
  }

  while (num < n) {
    if (isPrime(num)) {
      num1 = num;
      for (var i = num1; i < n; i ++) {
        if (isPrime(i)) {
          num2 = i;
          if (num1 + num2 == n) {
            console.log(num1, num2);
          }
        }
      }
    }
    num += 1;
  }
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

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
