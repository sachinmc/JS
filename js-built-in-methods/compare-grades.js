// Note that 'sort' only cares about the sign of the callback return value.
// You may sometimes see assertions that the comparison function should
// return 1, -1, or 0, but any value is appropriate provided the sign is correct.
// Our example uses 1, -1, and 0 merely as convenient values.

var studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

console.log(studentGrades.sort(compareGrades));
