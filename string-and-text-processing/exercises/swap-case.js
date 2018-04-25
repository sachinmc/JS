function swapcase(string) {
  return string.replace(/[a-z]/gi, function (match) {
    if (/[A-Z]/.test(match)) {
      return match.toLowerCase();
    } else {
      return match.toUpperCase();
    }
  });
}

console.log(swapcase('CamelCase'));              // "cAMELcASE"
console.log(swapcase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
