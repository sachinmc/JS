function swapName(name) {
  //split the string
  //concat last element with first element
  //join with ,
  var nameArr = name.split(' ');
  return nameArr[1] + ',' + ' ' + nameArr[0];
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
