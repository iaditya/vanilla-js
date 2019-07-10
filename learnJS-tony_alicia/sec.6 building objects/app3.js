// pure prototypal inheritence

// Object.create


var person = {
  fname: 'default',
  lname: 'default',
  full_name: function() {
    return this.fname + " " + this.lname;
  }
}

adi = Object.create(person);
console.log(adi);  // empty object with the value of base object in the prototype



// here person is base object ,   adi is child object of person object

adi.fname = "aditya";

console.log(adi);  // log - {fname: "aditya"}

adi.lname = "G";

console.log(adi);  // log - {fname: "aditya", lname: "G"}

console.log(adi.full_name());     // aditya G



    // Some browser does not support Object.create()
     // so we can use Polyfill
     //   "code that adds a feature which the javascript engine may lack."


//Polyfill

if(!Object.create) {
  Object.create = function(o) {
    if(arguments.length > 1) {
      return new Error("Object.create function only accept first param");
    }
    function F() = {}
    f.prototype = o;
    return new F();
  }
}
