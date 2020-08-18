//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let firstNum = 1;
  let secondNum = 1;
  let finalNum = firstNum + secondNum;
  let arr = [firstNum, secondNum];

  while (finalNum <= num){
    arr.push(finalNum);
    firstNum = secondNum;
    secondNum = finalNum;
    finalNum = firstNum + secondNum;
  }

  return arr.map(element => {return element%2 == 1? element : 0}).reduce((a,b)=>a+b);

}

sumFibs(4);
//return 5
sumFibs(75024);
//return 60696
sumFibs(75025);
//return 135721