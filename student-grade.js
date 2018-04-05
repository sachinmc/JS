function grade() {
  /*
  var score1 = Number(prompt('Enter score 1:'));
  var score2 = Number(prompt('Enter score 2:'));
  var score3 = Number(prompt('Enter score 3:'));
  var average = (score1 + score2 + score3)/3;
  */

  /* for any number of scores */
  var score;
  var total = 0;
  var count = 0;
  while (true) {
    score = prompt(`Enter score ${count + 1}:`)
    if (score == null || score == '') {
      break;
    } else {
      total += Number(score);
      count += 1;
    }
  }

  var avg = average(total, count);
  var grade;

  if (avg >= 90) {
    grade = 'A';
  } else if (avg >= 70) {
    grade = 'B';
  } else if (avg >= 50) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  console.log(`Based on the average of your three scores your letter grade \
is "${grade}".`);
}

function average(total, count) {
  return total/count;
}

grade();
