function octalToDecimal(numberString) {
  var number = numberString.split('');

  var places = number.map(function (val, idx) {
    return Number(val) * Math.pow(8, number.length - 1 - idx);
  });

  return places.reduce(function (result, current) {
    return result + current;
  });
}

//Alternative implementation
function octalToDecimal(numberString) {
  return numberString.split('').reduce(function (sum, current, idx) {
    return sum + Number(current) * Math.pow(8, numberString.length -1 - idx);
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
