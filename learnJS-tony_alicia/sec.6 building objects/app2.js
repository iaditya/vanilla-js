//built in function constructor
   // new Number(), String(), Date()



//adding new

String.prototype.isGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("Shamit".isGreaterThan(3));  // true

// "shamit" is a string object


Number.prototype.isPositive = function() {
  return this > 0;
}

// 3 is not a Number Object.

//console.log(3.isPositive());   // cause error

//console.log("3".isPositive());  // also cause error

var a = new Number(4);

//here a is Number Object

console.log(a.isPositive());    // true
