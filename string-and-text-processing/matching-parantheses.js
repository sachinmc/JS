function isBalanced(string) {
  var count = 0;

  string.split('').forEach(function (char) {
    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      count -= 1;
    }
  });

  // checks to match every opening bracket with a closing bracket, with count.
  // regex checks pattern begins and ends with opening braces
  // regex checks for string without braces
  return /^[^()]*(\(.*\)[^()]*|[^()]+)$/.test(string) && count === 0;
}

// realize if the tally goes -ve at any point we have imbalance.
function isBalanced(string) {
  var parensCount = 0;
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      parensCount += 1;
    } else if (string[i] == ')') {
      parensCount -= 1;
    }

    if (parensCount < 0) {
      return false;
    }
  }

  return parensCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
