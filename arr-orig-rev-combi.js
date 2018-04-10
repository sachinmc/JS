function origRevCombi(array) {
  var newArr = [];
  var i;

  for(i = 0; i < array.length; i += 1) {
    newArr.push(array[i]);
  }

  for(i = array.length - 1; i >= 0; i -= 1) {
    newArr.push(array[i]);
  }

  return newArr;

}

function origRevCombi(array) {
  return array.concat(array.slice().reverse());
}

var letters = ['A', 'L', 'V', 'A', 'R', 'H'];
console.log(origRevCombi(letters));
