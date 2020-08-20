// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether(arg) {
  if(arguments.length === 1 && Number.isFinite(arg)){
    return (num) => {return Number.isFinite(num)? num+arg: undefined;};
  }

  if(Number.isFinite(arguments[0]) && Number.isFinite(arguments[1])) {
    return(arguments[0] + arguments[1]);
  } 
}

addTogether(2,3);
//returns 5
addTogether(2, "3");
//returns undefined
addTogether(5)(7);
//returns 12
addTogether(2)([3]);
//returns undefined