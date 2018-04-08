function twice(number) {
  var len;
  var index1;
  var index2;
  var numStr = String(number);

  len = numStr.length;

  if (len % 2 === 0) {
    index1 = 0
    index2 = len/2;
    for (index1 = 0; index1 < len/2; index1++) {
      if (numStr[index1] !== numStr[index2]) {
        return number * 2;
      }
      index2 += 1;
    }
  } else {
    return number * 2;
  }

  return number;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
