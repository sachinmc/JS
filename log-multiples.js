/* log all multiples of the argument between 0 and 100 (inclusive) that are
also odd numbers. Log the values in descending order */

function logMultiples(number) {
  var count = 1;
  var multiple = count * number;
  while (multiple <= 100) {
    console.log(multiple);
    count += 2; //logs only odd multiples
    multiple = number * count;
  }
}

function logMultiples(number) {
  var factor = Math.floor(100/number);
  while (factor > 0) {
    if (factor % 2 != 0) console.log(factor * number);
    factor--;
  }
}

function logMultiples(number) {
  var multiple = Math.floor(100/number) * number;
  while (multiple > 0) {
    if (multiple % 2 == 1) {
      console.log(multiple);
    }
    multiple -= number;
  }
}

logMultiples(17);
