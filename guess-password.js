function password() {
  var attempts = 0;
  while (attempts < 3) {
    var response = prompt('What is the password:');
    if (response === 'athens') {
      return 'You have successfully logged in.';
    }
    attempts += 1
  }
  return 'You have been denied access.';
}

console.log(password());
