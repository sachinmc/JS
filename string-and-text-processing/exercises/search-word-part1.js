var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
  var regex = new RegExp(word, 'gi');
  var matches = text.match(regex);

  return matches ? matches.length : 0;
}

// match whole words, remember you are parsing the whole text as a single string
// so using ^ $ anchors would not yield desired result. Instead use word boundaries.
// if using anchors, then string will have to be split into words and then matched. 
function searchWord(word, text) {
  var regex = new RegExp('\\b' + word + '\\b', 'gi');
  var matches = text.match(regex);

  return matches ? matches.length : 0;
}


console.log(searchWord('sed', text)); // 3
console.log(searchWord('toaster', text)); // 3
console.log(searchWord('qui', text));  // 4 words not 13
