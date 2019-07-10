var person = {

    fname : "default",
    lname : "defaultLast",
    getName : function() {
        return this.fname + " " + this.lname;
    }
}

var adisha = {

    fname: 'aditya',
    lname : 'gupta',

}

adisha.__proto__ = person;

for (prop in adisha) {
    console.log(prop + ": " + adisha[prop]);
}  // return fname, lname, getName()           ----------Reflection

for (prop in adisha) {
    if(adisha.hasOwnProperty(prop)) {           // baseObject => hasOwnProperty
    console.log(prop + ": " + adisha[prop]);
        }
}  // return fname, lname                       ----------Reflection


var lko = {
    fname : 'atul',
}

var delhi = {
    state : 'delhi',
}

var walk = {
    run: function () {
        console.log('always run');
    }
}

// add all preperty from lko, delhi , walk to person object.

_.extend(person, lko, delhi, walk);         //----------- extend using underscore.js ---
                                            // composite objects values and function in one object.
console.log(person);
