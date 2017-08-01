function isPrime(n) {
  var arr = [];
  var x = false;
  if (n == 2) return true;
  if (n == 1) return false;
  for(var i = 2; i < n; i++) {
    if (n%i != 0)
      arr.push(true);
    if (n%i == 0)
      arr.push(false);
   }
   return arr.every(function (element) {
      return element === true;
    });
};

console.log(isPrime(7));
console.log(isPrime(4));
