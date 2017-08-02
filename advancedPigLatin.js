function translate(sentence) {
  var strArray = sentence.split(' ');
  for(var i = 0; i < strArray.length; i++){
      if (strArray[i].match(/[aeiouAEIOU]/) != null) {
        var index = strArray[i].match(/[aeiouAEIOU]/).index;
      }
      if(index == 0){
        if (/[?!.]/.test(strArray[i])){
         var temp = strArray[i].slice(strArray[i].length - 1);
         strArray[i] = strArray[i] + "way" + temp;
        } else {
         strArray[i] = strArray[i] + "way";
        }
      } else if (index != null) {
        if (strArray[i].charAt(0) == strArray[i].charAt(0).toUpperCase()){
          strArray[i] = (strArray[i].slice(index) + strArray[i].slice(0,index) + "ay").toLowerCase();
          strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
        } else {
          strArray[i] = strArray[i].slice(index) + strArray[i].slice(0,index) + "ay";
        }
      }
      if (/[?!.]/.test(strArray[i])){
        var punctuation = strArray[i].match(/[?!.]/g).join('');
        strArray[i] = strArray[i].replace(/[?!.]/g, '');
        strArray[i] = strArray[i] + punctuation;
      }
  }
  return strArray.join(' ');
}

console.log(translate("hello world"));
