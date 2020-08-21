// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  return arr.map(obj => {
    obj.orbitalPeriod = Math.round((2*Math.PI)*(Math.sqrt((Math.pow(earthRadius+obj.avgAlt,3))/GM)));
    delete obj.avgAlt;
    return obj;
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//returns [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
//returns [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]