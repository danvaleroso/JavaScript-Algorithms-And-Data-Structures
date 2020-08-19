// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//get all the prime numbers in object form
function getAllPrime(num){
  let primeNumbers = {};
  for(let i = 2; i <= num; i++){
    while(isPrime(i) && num % i == 0){
      primeNumbers[i] = (primeNumbers[i] || 0) + 1;
      num /= i;
    }
  }
  return primeNumbers;
}

//check if a number is Prime 
function isPrime(num){
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num%i == 0) {
      return false;
    }
  }
  return num <= 1? false : true;
}

function smallestCommons(arr) {
  let allPrimes = {};
  //sort arr from lowest to highest
  arr.sort((a,b)=>a-b);
  //get all the highest possible prime numbers of the range in object form
  for(let i = arr[0]; i <= arr[1]; i++){
    for(let prop in getAllPrime(i)){
      if(allPrimes.hasOwnProperty(prop) && allPrimes[prop] < getAllPrime(i)[prop]){
        allPrimes[prop] = getAllPrime(i)[prop];
      } else if(!allPrimes.hasOwnProperty(prop)) {
        allPrimes[prop] = getAllPrime(i)[prop];
      }
    }
  }

  let lcm = 1;
  //multiply all the prime numbers to get the lcm
  for(const value in allPrimes){
    lcm *= (Math.pow(Number(value),allPrimes[value]));
  }
  console.log(lcm);
  return lcm;
}

smallestCommons([23,18]);
//return 6056820
smallestCommons([1, 13]);
//return 360360
smallestCommons([5, 1]);
//return 60