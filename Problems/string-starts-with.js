function startsWith(str, beginWith) {
  for (var i = 0; i < beginWith.length; i++) {
    if (beginWith[i] !== str[i]) {
      return false;
    }
  }

  return true;
}

function executor() {
  var str = 'We put comprehension and mastery above all else';
  console.log(startsWith(str, 'We'));              // true
  console.log(startsWith(str, 'We put'));          // true
  console.log(startsWith(str, ''));                // true
  console.log(startsWith(str, 'put'));             // false

  var longerString = 'We put comprehension and mastery above all else!';
  console.log(startsWith(str, longerString));      // false
}

executor();
