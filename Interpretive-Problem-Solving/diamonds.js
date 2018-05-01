// Write a function that displays a four-pointed diamond in an nxn grid,
// where n is an odd integer supplied as an argument to the function.
// You may assume that the argument will always be an odd integer.

// output, four pointed diamond in an n x n grid
// input, odd integer

// create a space and star variables
// create a result variable of type string
// loop for integer number of times
// start a space counter at Math.floor integer / 2
// start the start counter at 1
// during each iteration append the number of spaces and stars to result
// print result to the console
// reset the result string for the next iteration
// when space counter hits zero, start incrementing space counter and
// decrementing star counter
// during each iteration append the number of spaces and stars to result
// print result to console
// reset the result string for the next iteration
// continue until end of main loop


function diamond(integer) {
  var spaceCounter;
  var starCounter;
  var firstHalf;
  var secondHalf;
  var result = '';
  var space = ' ';
  var star = '*';
  var i;

  spaceCounter = Math.floor(integer / 2);
  starCounter = 1;

  firstHalf = Math.ceil(integer / 2);
  secondHalf = integer - firstHalf;

  for (i = 0; i < firstHalf; i += 1) {
    result += multiply(space, spaceCounter);
    result += multiply(star, starCounter);

    console.log(result);
    result = '';

    spaceCounter -= 1;
    starCounter += 2;
  }

  spaceCounter += 1;
  starCounter -= 2;

  for (i = 0; i < secondHalf; i += 1) {
    spaceCounter += 1;
    starCounter -= 2;

    result += multiply(space, spaceCounter);
    result += multiply(star, starCounter);

    console.log(result);
    result = '';
  }
}

function multiply(str, counter) {
  var result = '';
  var i = 0;

  while (i < counter) {
    result += str;
    i += 1;
  }

  return result;
}


//    *
//   ***
//  *****
// *******
//*********

// diamond(1);

// diamond(3);

// diamond(7);

diamond(9);


// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
