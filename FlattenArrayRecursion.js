//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(!Array.isArray(arr[i])){
      newArr.push(arr[i]);
    } else {
      newArr.push(...steamrollArray(arr[i]));
    }
  } 

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
//returns [1,2,3,4]
steamrollArray([1, [], [3, [[4]]]]);
//returns [1,3,4]
steamrollArray([[["a"]], [["b"]]]);
//returns ["a","b"]