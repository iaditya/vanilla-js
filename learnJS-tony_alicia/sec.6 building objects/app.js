// function constructor ae just a function.


// Rule/convention for function constructor
//      1. function letter of the function should be capital
//      2. 


function Person(fname , lname) {
  console.log(this);  // empty object
  this.fname = fname;
  this.lname = lname;
  console.log(this);   // still empty object
  console.log("the function is invoked.");
}



// this is called person function
var adi = new Person('adi', 'sha');    // function constructor - copy the propery (this. property) of person function.

console.log(adi);



console.log("-------------------------------------");


// setting prototype

//every function have prototype property

Person.prototype.fullName = function() {
  return this.fname + ' ' + this.lname;
}

var adi = new Person('ket', 'G');

console.log(adi.fullName());
