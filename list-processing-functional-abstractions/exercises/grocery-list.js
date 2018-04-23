function buyFruit(basket) {
  return basket.map(function (fruitPack) {
    return fruitMultiplier(fruitPack);
  }).reduce(function (array1, array2) {
    return array1.concat(array2);
  });
}

function fruitMultiplier(fruitPack) {
  var count = fruitPack[1];
  var result = [];

  while (count > 0) {
    result.push(fruitPack[0]);
    count -= 1;
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
