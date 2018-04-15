function isPalindrome(string) {
 return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  var string = string.toLowerCase();
  string = string.replace(/\W/g, '');

  return isPalindrome(string);
}

//console.log(isPalindrome('madam'));               // true
//console.log(isPalindrome('Madam'));               // false (case matters)
//console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
//console.log(isPalindrome('356653'));              // true

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
