function retire() {
  var age = parseInt(prompt('what is your age?'), 10);
  var retireAge = parseInt(prompt('At what age would you like to retire?'), 10);
  var today = new Date();
  var year;

  year = today.getFullYear();

  console.log('It\'s ' + String(year) + '.' +
              'You will retire in ' + String(retireAge - age + year) + '.' + '\n' +
              'You have only ' + String(retireAge - age) + ' years to go!');
}
