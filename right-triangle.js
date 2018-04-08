function triangle(num) {
  var i;
  var j;
  var k;
  var stars = '';
  var spaces = '';

  for (i = 1; i <= num; i++) {
    for (j = num - i; j > 0; j--) {
      spaces += ' ';
    }
    for (k = 0; k < i; k ++) {
      stars += '*';
    }
    console.log(spaces + stars);
    spaces = '';
    stars = '';
  }
}

triangle(5);
triangle(9);
