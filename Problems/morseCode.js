function decode(input) {

var morseRef = new Object;

morseRef[". _"]="a";
morseRef["_ . . ."]="b";
morseRef["_ . _ ."]="c";
morseRef["_ . ."]="d";
morseRef["."]="e";
morseRef[". . _ ."]="f";
morseRef["_ _ ."]="g";
morseRef[". . . ."]="h";
morseRef[". ."]="i";
morseRef[". _ _ _"]="j";
morseRef["_ . _"]="k";
morseRef[". _ . ."]="l";
morseRef["_ _"]="m";
morseRef["_ ."]="n";
morseRef["_ _ _"]="o";
morseRef[". _ _ ."]="p";
morseRef["_ _ . _"]="q";
morseRef[". _ ."]="r";
morseRef[". . ."]="s";
morseRef["_"]="t";
morseRef[". . _"]="u";
morseRef[". . . _"]="v";
morseRef[". _ _"]="w";
morseRef["_ . . _"]="x";
morseRef["_ . _ _"]="y";
morseRef["_ _ . ."]="z";
morseRef[". _ _ _ _"]="1";
morseRef[". . _ _ _"]="2";
morseRef[". . . _ _"]="3";
morseRef[". . . . _"]="4";
morseRef[". . . . ."]="5";
morseRef["_ . . . ."]="6";
morseRef["_ _ . . ."]="7";
morseRef["_ _ _ . ."]="8";
morseRef["_ _ _ _ ."]="9";
morseRef["_ _ _ _ _"]="0";

var output = [];
var words = input.split('       ');

for(var i = 0; i < words.length; i++) {
  if(output.length != 0) output.push(' ');
    var letter = words[i].split('   ');
  for(var j = 0; j < letter.length; j++)
    if(Object.keys(morseRef).indexOf(letter[j]) != -1)
      output.push(morseRef[letter[j]]);
}

return output.reduce((final, string) => final + string);

}

console.log()
