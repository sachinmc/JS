function sumOrProduct() {
  var int;
  var choice;
  var result = 0;

  int = parseInt(prompt('Please enter an integer greater than 0:'));
  choice = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

  if (choice == 's') {
    for (var i = 1; i <= int; i++) {
      result += i;
    }
  } else if (choice == 'p') {
    for (var i = 1; i <= int; i++) {
      result *= i;
    }
  }

  return result;
}

/*
using reduce for array input
[1,2,3].reduce((acc, curVal) => acc + curVal);
*/

sumOrProduct();
