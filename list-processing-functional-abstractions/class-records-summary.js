var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(data) {
  var studentScores = [];
  var studentGrades = [];
  var exams = [];

  // retrieve scores obj for all students
  for (var property in data) {
    studentScores.push(data[property].scores);
  }

  var studentGrades = studentScores.map(function (scores) {
    var average = findAverage(scores.exams);
    var total = findTotal(scores.exercises);
    var finalScore = applyWeights(average, total);

    return grade(finalScore);
  });

  var exams = studentScores.map(function (scores) {
    var avg = Math.round(findAverage(scores.exams) * 10) / 10;
    var min = Math.min(...scores.exams);
    var max = Math.max(...scores.exams);

    return { average: avg, minimum: min, maximum: max, }
  });

  return { studentGrades: studentGrades, exams: exams, };
}

function findAverage(exams) {
  return exams.reduce((acc, cur) => acc + cur) / exams.length;
}

function findTotal(exercises) {
  return exercises.reduce((acc, cur) => acc + cur);
}

function applyWeights(average, total) {
  return Math.round(average * 0.65 + total * 0.35);
}

function grade(finalScore) {
  if (finalScore >= 93) {
    return format(finalScore, 'A');
  } else if (finalScore >= 85) {
    return format(finalScore, 'B');
  } else if (finalScore >= 77) {
    return format(finalScore, 'C');
  } else if (finalScore >= 69) {
    return format(finalScore, 'D');
  } else if (finalScore >= 60) {
    return format(finalScore, 'E');
  } else if (finalScore >= 0) {
    return format(finalScore, 'F');
  }

}

function format(finalScore, letterGrade) {
  return `${finalScore} (${letterGrade})`;
}

console.log(generateClassRecordSummary(studentScores));

// returns: (the values are just examples)
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
