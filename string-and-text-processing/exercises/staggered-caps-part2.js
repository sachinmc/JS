function staggeredCase(string) {
  var toggle = true; // true for caps
  return string.split('').map(function (char, idx) {
    if (/[a-z]/i.test(char)) {
      if (toggle) {
        toggle = false;
        return char.toUpperCase();
      } else {
        toggle = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

// if char is alphabet then apply
