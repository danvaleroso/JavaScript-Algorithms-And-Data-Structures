// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let arr1 = arguments[0].slice(0);

  for(let i = 0; i < arr1.length; i++){
    for(let j = 1; j < arguments.length; j++){
      if(arr1[i] === arguments[j]){
        arr1.splice(i,1,false);
      }
    }
  }

  console.log(arr1.filter(value => value != false));
  return arr1.filter(value => value != false);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//return [1, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
//return [1]
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
//return [12, 92, 65]