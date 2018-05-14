function cleanup(text) {
  return text.replace(/[^\w]+/g, ' ');
}

cleanup("---what's my +*& line?");
