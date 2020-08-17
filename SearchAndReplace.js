// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  let finalStr = "";
  let firstLetterCheck = /[A-Z]/;

  firstLetterCheck.test(before[0])? 
    finalStr = finalStr.concat(after[0].toUpperCase().concat(after.substr(1)))
    : finalStr = finalStr.concat(after[0].toLowerCase().concat(after.substr(1)));

  return str.replace(before,finalStr);
}

myReplace("Let us go to the store", "store", "mall");
//return "Let us go to the mall"
myReplace("His name is Tom", "Tom", "john");
//return "His name is John"
myReplace("I think we should look up there", "up", "Down");
//return "I think we should look down there"
myReplace("Let us get back to more Coding", "Coding", "algorithms");
//return "Let us get back to more Algorithms"

