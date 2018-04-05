function gcd(num1, num2) {
  var factor;

  factor = num1 < num2 ? num1 : num2;

  while (factor != 0) {
    if (num1 % factor == 0 && num2 % factor ==0) {
      return factor;
    }
    factor -= 1;
  }

}

/* euclid's algorithm */
function gcd(num1, num2) {
  var small;
  var large;
  var remainder;

  if (num1 < num2) {
    small = num1;
    large = num2
  } else {
    small = num2;
    large = num1;
  }

  while (true) {
    remainder = large % small;
    if (remainder == 0) {
      return small; //gcd
    } else {
      large = small;
      small = remainder;
    }
  }

}

/* num2 always smaller, euclids */
function gcd(num1, num2) {
  var temp;

  while (num2 != 0) {
    temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }

  return num1;
}

console.log(gcd(8, 12));
console.log(gcd(54, 24));
console.log(gcd(17, 15));
console.log(gcd(12, gcd(4, 8)));
