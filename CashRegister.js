// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

var currencyUnitValue = {
  "PENNY" : 0.01,
  "NICKEL" : 0.05,
  "DIME" : 0.1,
  "QUARTER" : 0.25,
  "ONE" : 1,
  "FIVE" : 5,
  "TEN" : 10,
  "TWENTY" : 20,
  "ONE HUNDRED" : 100
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let changeDenomination = [];

  //loop through cid from highest currency
  for(let i = cid.length-1; i >= 0; i--){
    //if cid is greater than zero and if currency is below the change
    if(cid[i][1] > 0 && currencyUnitValue[cid[i][0]] <= change){
      let changeAmount = 0;
      //take the changeAmount in the cashInDrawer and subtract it to total change
      while(cid[i][1] > 0 && currencyUnitValue[cid[i][0]] <= change){
        changeAmount += currencyUnitValue[cid[i][0]];
        cid[i][1] -= currencyUnitValue[cid[i][0]];
        change -= currencyUnitValue[cid[i][0]];
        //round the value to the nearest hundredths (fix inconsistency bugs)
        changeAmount = Math.round(changeAmount * 100) / 100;
        change = Math.round(change * 100) / 100;
        cid[i][1] = Math.round(cid[i][1] * 100) / 100;
      }
      //push the changeAmount to an array with its currency
      changeDenomination.push([cid[i][0], changeAmount]);
    }
  }
  
  //if change is equal to zero it means ,change amount is reached.
  
  if(change === 0){
    if(cid.map(item => item[1]).reduce((a,b) => a+b) > 0){
      return {status: "OPEN", change: changeDenomination};
    } else {
      //if the drawer is empty return the change and the amount of the remaining currency
      let finalCid = cid.map((ele) => {
        for(let i = 0; i < changeDenomination.length; i++){
          return ele[0] == changeDenomination[i][0] ? changeDenomination[i]: ele;
        }
      });
      return {status: "CLOSED", change: finalCid};
    }
  }
  //return insufficient funds if the amount is not enough
  return {status: "INSUFFICIENT_FUNDS", change: []};
  
}


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//returns {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//returns {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//returns {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//returns {status: "INSUFFICIENT_FUNDS", change: []}