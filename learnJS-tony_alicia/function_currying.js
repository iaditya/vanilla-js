//using bind() method

function multiply (a, b) {
    return a * b;
}

var mulByTwo = multiply.bind(this, 2);     // a always is 2.

//var mulByTwo = multiply.bind(this, 2, 2);    // a = 2, b = 2

//var mulByTwo = multiply.bind(this);    // a = null, b = null

console.log(mulByTwo(3));  // log 6        // a=2, b = 3

console.log(mulByTwo(3, 3));  // still 6   // a=2, b = 3



var mulByN = multiply.bind(this);

console.log(mulByN(3, 3));  // log 9

console.log(mulByN(3));   // Nan

console.log(mulByN());     // Nan

console.log(mulByN(3, 3, 3)); //still 9



// function borrowing

var person = {
  fname : "adi",
  lname : "sha",
  full_name : function() {
    return this.fname + " " + this.lname;
  }
}

console.log(person.full_name());

var person2 = {
  fname: "Akash",
  lname: "G"
};

result = person.full_name.apply(person2);     // function borrowing
console.log(result);
