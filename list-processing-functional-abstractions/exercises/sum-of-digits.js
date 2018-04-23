function sum(number) {
  var numberStr = String(number).split('');
  var numberArray = numberStr.map(function (value) {
    return Number(value);
  })
  
  return numberArray.reduce(function (acc, curr) {
    return acc + curr;
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
