// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++){
    if(!collection[i].hasOwnProperty(pre)){
      return false;
    } else if (collection[i].hasOwnProperty(pre) && !collection[i][pre]){
      return false;
    }
  }
  return true;
}

truthCheck([{"single": "yes"}], "single");
//returns true
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") ;
//returns true
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
//returns false
truthCheck([{"single": "double"}, {"single": undefined}], "single");
//returns false
