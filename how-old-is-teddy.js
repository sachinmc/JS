function age() {
  var min = 20;
  var max = 200;
  var age = Math.floor(Math.random() * (max - min + 1)) + min;

  return `Teddy is ${age} years old!`
}

console.log(age());

/* LS Solution 

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var age = randomBetween(20, 200);
console.log('Teddy is ' + age + ' years old!');

*/
