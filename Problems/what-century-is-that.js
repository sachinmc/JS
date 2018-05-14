function century(year) {
  var centuryNum;
  var lastDigit;
  var strNum;
  var lastTwoDigits;

  if (year % 100 != 0) {
    centuryNum = Math.floor(year / 100) + 1
  } else if (year % 100 == 0) {
    centuryNum = year / 100;
  }

  lastDigit = centuryNum % 10;
  lastTwoDigits = centuryNum % 100;
  strNum = String(centuryNum);

  switch (lastTwoDigits) {
    case 11: return strNum + 'th';
    case 12: return strNum + 'th';
    case 13: return strNum + 'th';
  }

  switch (lastDigit) {
    case 1: return strNum + 'st';
    case 2: return strNum + 'nd';
    case 3: return strNum + 'rd'
    default: return strNum + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
