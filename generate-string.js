function stringGen(array) {
  var result = '';

  for (var i = 0; i < array.length; i++) {
    result += String(array[i]);
  }

  return result;
}
