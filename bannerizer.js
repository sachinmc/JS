function logInBox(text) {
  var len;

  len = text.length;

  console.log('+' + replicate('-', len + 2) + '+' );
  console.log('|' + replicate(' ', len + 2) + '|' );
  console.log('| ' + text + ' |' );
  console.log('|' + replicate(' ', len + 2) + '|' );
  console.log('+' + replicate('-', len + 2) + '+' );

}

function replicate(str, len) {
  var result = '';

  while (result.length < len) {
    result += str;
  }

  return result;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');


//Truncate, fixed width / char length = 42

function logInBox(text) {
  var len;
  var truncateStr;

  truncateStr = text.substring(0, 42);
  len = truncateStr.length;

  console.log('+' + replicate('-', len + 2) + '+' );
  console.log('|' + replicate(' ', len + 2) + '|' );
  console.log('| ' + truncateStr + ' |' );
  console.log('|' + replicate(' ', len + 2) + '|' );
  console.log('+' + replicate('-', len + 2) + '+' );

}

function replicate(str, len) {
  var result = '';

  while (result.length < len) {
    result += str;
  }

  return result;
}

logInBox("Greece is a country in southeastern Europe with thousands of islands \
throughout the Aegean and Ionian seas. Influential in ancient times, it's often \
called the cradle of Western civilization. Athens, its capital, retains landmarks \
including the 5th-century B.C. Acropolis citadel with the Parthenon temple.");

logInBox('');


//Wrap around

/*
function logInBox(text) {
  var len;

  len = 42; //fixed length to fit in the box, index is 0 to 41.

  console.log('+' + replicate('-', len + 2) + '+' );
  console.log('|' + replicate(' ', len + 2) + '|' );

  console.log('| ' + text.substring(0, len) + ' |' );

  console.log('|' + replicate(' ', len + 2) + '|' );
  console.log('+' + replicate('-', len + 2) + '+' );

}

function replicate(str, len) {
  var result = '';

  while (result.length < len) {
    result += str;
  }

  return result;
}

logInBox("Greece is a country in southeastern Europe with thousands of islands \
throughout the Aegean and Ionian seas. Influential in ancient times, it's often \
called the cradle of Western civilization. Athens, its capital, retains landmarks \
including the 5th-century B.C. Acropolis citadel with the Parthenon temple.");
*/
