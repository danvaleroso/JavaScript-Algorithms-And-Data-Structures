//Write sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let sum = 0;

  function isPrime(checkNum){
    //I use Math.sqrt so that the big O notation is O(sqrt(n))
    for(let i = 2; i <= Math.sqrt(checkNum); i++){
      if(checkNum%i == 0){
        return false;
      }
    }
    return checkNum <= 1? false : true;
  }
  
for(let i = 2; i <= num; i++){
  if(isPrime(i)){
    sum += i;
  }
}
  console.log(sum);
  return sum;
}

sumPrimes(10);
//return 17
sumPrimes(977);
//return 73156
sumPrimes(10002);
//return 5736396