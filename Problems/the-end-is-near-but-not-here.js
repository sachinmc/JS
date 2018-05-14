function penultimate(string) {
  var strArr = string.split(' ');
  return strArr[strArr.length - 2];
}

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
