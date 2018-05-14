function union(arrayOne, arrayTwo) {
  var i;
  var property;
  var newArr;
  var obj = {};

  newArr = arrayOne.concat(arrayTwo);
  for(i = 0; i < newArr.length; i += 1) {
    property = newArr[i];
    if(!obj[property]) {
      obj[property] = 0;
    }
  }

  return Object.keys(obj).map(ele => Number(ele));
}

//another way to solve:
function union() {
  //...
}

console.log(union([1, 3, 5], [3, 6, 9]));  //[1, 3, 5, 6, 9]
