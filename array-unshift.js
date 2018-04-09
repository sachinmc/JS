function unshift(array, val) {
  var temp;
  var len = array.length;

  for (var i = 0; i <= len; i++) {
    temp = array[i];
    array[i] = val;
    val = temp;
  }

  return array.length;
}

function unshift(array, val) {
  var i;

  for(i = array.length; i > 0; i -= 1) {
    array[i] = array[i - 1]
  }

  array[0] = val;

  return array.length;
}

var count = [1, 2, 3];
unshift(count, 0);
count;
