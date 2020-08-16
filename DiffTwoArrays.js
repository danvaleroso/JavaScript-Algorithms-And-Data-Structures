// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];
    let counts = {};
    newArr = arr1.concat(arr2);
  
    for(let i = 0; i < newArr.length; i++){
      counts[newArr[i]] = (counts[newArr[i]] || 0) +  1;
    }
  
    console.log(newArr.filter(item => counts[item] <= 1));
    
    return newArr.filter(item => counts[item] <= 1);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  //return [4]
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  //return [ 'pink wool', 'diorite' ]
  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
  //return [ 'piglet', 4 ]