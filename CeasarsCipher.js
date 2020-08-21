// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let replace = /[A-Z]/g;
  return str.replace(replace, s => {
    return String.fromCharCode((s.charCodeAt(0) % 26) + 65) ;
  });
  
}

rot13("SERR CVMMN!");
//returns "FREE PIZZA!"
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
//returns "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."