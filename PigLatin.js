// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// - If a word doesn't have any vowel, just add "ay" at the end.

function translatePigLatin(str) {
  let regex = /[aeiou]/i;
  
  for(let i = 0; i < str.length; i++){
    if(regex.test(str[i]) && i == 0){
        return str.substr(i, str.length).concat("way");
    } else if(regex.test(str[i])){
        return str.substr(i, str.length).concat(str.substr(0,i)).concat("ay");
    }
  }
  return str.concat("ay");
}

translatePigLatin("consonant");
//return "onsonantcay"
translatePigLatin("rhythm");
//return "rhythmay"
translatePigLatin("algorithm");
//return "algorithmway"
translatePigLatin("schwartz");
//return "artzschway"