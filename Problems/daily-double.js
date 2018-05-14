function crunch(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) continue;
    result += string[i];
  }

  return result;
}

//  using regex and arrow function:
var crunch = text => text.replace(/(\w)\1+/g, "$1");


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
