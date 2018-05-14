function shift(array) {
  var val;
  val = array[0];

  for(var i = 1; i < array.length; i ++) {
    array[i - 1] = array[i];
  }

  array.length = array.length - 1;
  return val;
}

var count = [1, 2, 3];
shift(count);           // 1
count;
