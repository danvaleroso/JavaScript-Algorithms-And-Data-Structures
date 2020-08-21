// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let replace = /[A-Z]/g;
  let decoder = { A:"N", B:"O", C:"P", D:"Q", E:"R", 
  F:"S", G:"T", H:"U", I:"V", J:"W", K:"X", L:"Y", 
  M:"Z", N:"A", O:"B", P:"C", Q:"D", R:"E", S:"F", 
  T:"G", U:"H", V:"I", W:"J", X:"K", Y:"L", Z:"M" 
  };

  return str.replace(replace, s => decoder[s]);
  
}

rot13("SERR CVMMN!");
//returns "FREE PIZZA!"
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
//returns "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."