function generatePattern(n) {
  var str = '';
  var stars;
  var counter;
  for (var i = 1; i <= n; i++) {
    stars = '';
    counter = n - i;
    str += `${i}`;
    while (counter > 0) {
      stars += '*';
      counter -= 1;
    }

    console.log(str + stars);
  }
}

function generatePattern(n) {
  var string;

  for(i = 1; i <= n; i++) {
    string = ''
    for (j = 1; j <= i; j ++) {
      string += String(j);
    }

    for (k = i + 1; k <= n; k++) {
      string += '*';
    }

    console.log(string);
  }
}

generatePattern(7);

/* for numbers greater than 9, 2 digit numbers */

function generatePattern(n) {
  var i;
  var j;
  var k;
  var string;

  for(i = 1; i <= n; i++) {
    string = ''
    for (j = 1; j <= i; j ++) {
      string += String(j);
    }

    for (k = i + 1; k <= n; k++) {
      if (k > 9) {
        string += '**';
      } else {
        string += '*';
      }
    }

    console.log(string);
  }
}

generatePattern(20);

/* an arbitrary number of digits */

function generatePattern(n) {
  var i;
  var j;
  var k;
  var string;
  var lastRowString = '';

  for (i = 1; i <= n; i++) {
    lastRowString += String(i);
  }

  width = lastRowString.length;

  for(i = 1; i <= n; i++) {
    string = ''
    for (j = 1; j <= i; j ++) {
      string += String(j);
    }

    stars = width - string.length;

    for (k = 1; k <= stars; k++) {
      string += '*'
    }

    console.log(string);
  }
}

generatePattern(22);
