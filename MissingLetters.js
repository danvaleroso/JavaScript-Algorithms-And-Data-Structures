// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let value = 0;
  let afterValue = str.charCodeAt(0);

  for(let i = 1; i < str.length; i++){
    value = str.charCodeAt(i);
    if ((value - afterValue) > 1){
      return String.fromCharCode(afterValue+1);
    }
    afterValue = value;
  }
}

fearNotLetter("stvwx");
//return "u"
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
//return undefined
fearNotLetter("abcdefghjklmno");
//return "i"
