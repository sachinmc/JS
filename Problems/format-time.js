function formatTime(date) {
  var hours = String(date.getHours());
  var minutes = String(date.getMinutes());

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  return hours + ':' + minutes;
}

var today = new Date();
console.log(formatTime(today));
