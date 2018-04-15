function centerOf(string) {
  var len = string.length;
  var mid = Math.floor(len/2);
  
  return len % 2 === 0 ? string[mid - 1] + string[mid] : string[mid];
}



console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
