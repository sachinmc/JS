function compareVersions(version1, version2) {
  var v1Ele;
  var v2Ele;
  var counter;
  var numCheck1;
  var numCheck2;
  var i;

  // taking care of inputs => .1, 1.
  if (version1[0] === '.' || version1.slice(-1) === '.') {
    return null;
  }

  if (version2[0] === '.' || version2.slice(-1) === '.') {
    return null;
  }

  v1Ele = version1.split('.');
  v2Ele = version2.split('.');

  // Number('') === 0, '' is not a valid number
  numCheck1 = v1Ele.every(function (ele) {
    return !isNaN(Number(ele)) && ele !== '';
  });

  numCheck2 = v2Ele.every(function (ele) {
    return !isNaN(Number(ele)) && ele !== '';
  });

  if (!(numCheck1 && numCheck2)) {
    return null;
  }

  // to compare accurately between 1.0 and 1.0.5, they should be of the same length 
  if (v1Ele.length < v2Ele.length) {
    counter = v2Ele.length;
    while (counter > v1Ele.length) {
      v1Ele.push('0');
      counter -= 1;
    }
  } else if (v2Ele.length < v1Ele.length) {
    counter = v1Ele.length;
    while (counter > v2Ele.length) {
      v2Ele.push('0');
      counter -= 1;
    }
  }

  for(i = 0; i < v1Ele.length; i += 1) {
    if (Number(v1Ele[i]) === Number(v2Ele[i])) {
      continue;
    } else if (Number(v1Ele[i]) < Number(v2Ele[i])) {
      return -1;
    } else if (Number(v1Ele[i]) > Number(v2Ele[i])) {
      return 1;
    }
  }

  return 0;
}


// test cases:
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
