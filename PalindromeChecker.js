// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  let regex = /[a-z0-9]/;
  let strArr = str.toLowerCase().split("").filter(ele => regex.test(ele));
  let inverseArr = [];

  strArr.forEach(ele => {inverseArr.unshift(ele)});

  return strArr.join("") == inverseArr.join("")? true: false;
}

palindrome("eye");
//returns true
palindrome("A man, a plan, a canal. Panama");
//returns true
palindrome("almostomla");
//returns false
palindrome("1 eye for of 1 eye.");
//returns false
