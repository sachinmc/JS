function isPrime(n) {

  //handling negative numbers
  if (n < 0) n=n*(-1);
  //handling 1 and 0
  if (n==1 || n==0) return false;

  var x = n;
  n = n-1;
  //recursive call with return statement below
  var primeCheck = function (x, n) {
    if (n==1) return 1;
    return x%n * primeCheck(x, n-1);
  }

  return primeCheck(x,n) != 0 ? true : false;
};

console.log(isPrime(17));
console.log(isPrime(24));
