function acronym(string) {
  var acronym;

  acronym = string.replace('-', ' ').split(' ').map(function (word) {
    return word[0].toUpperCase();
  });

  return acronym.join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
