/*
function logOddNumbers(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 != 0) console.log(i);
  }
}
*/

/*
function logOddNumbers(num) {
  for (var i = 2; ; i += 2) {
    console.log(i - 1);
    if (i > num) break;
  }
}
*/

/*
function logOddNumbers(num) {
  for (var i = 1; i <= num; i += 2) {
    console.log(i);
  }
}
*/

function logOddNumbers(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}

logOddNumbers(19);
