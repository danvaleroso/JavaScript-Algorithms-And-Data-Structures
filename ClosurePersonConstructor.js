// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.setFullName = function(setName) {
    firstName = setName.split(" ")[0];
    lastName = setName.split(" ")[1];
  };
  this.setFirstName = (fName) => {firstName = fName;};
  this.setLastName = (lName) => {lastName = lName;};

  this.getFirstName = () => {return (firstName)};
  this.getLastName = () => {return (lastName)};
  this.getFullName = () => {return(`${firstName} ${lastName}`)};
};


let bob = new Person("Bob Ross");

console.log(Object.keys(bob).length);
//returns 6
console.log(bob instanceof Person);
//returns true
console.log(bob.firstName);
//returns undefined
console.log(bob.lastName);
//returns undefined
console.log(bob.getFirstName());
//returns "Bob"
console.log(bob.getLastName());
//returns "Ross"

bob.setFirstName("Haskell");

console.log(bob.getFullName());
//returns "Haskell Ross"

bob.setLastName("Curry");

console.log(bob.getFullName());
//returns "Haskell Curry"
console.log(bob.getFirstName());
//returns "Haskell"
console.log(bob.getLastName());
//returns "Curry"