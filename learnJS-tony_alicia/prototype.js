// proto object{},   prototype chain.

var person = {
    fname: 'aditya',
    lname: 'gupta',
    fullName: function() {
        return this.fname + ' ' + this.lname;
    }
}

console.log(person.fullName());

var adisha = {
    fname: 'adi',
    lname: 'sha',
}


//don't do this. It's slow your application.
adisha.__proto__ = person;
console.log(adisha.fullName());  // log adi sha


var goat = {
    fname : 'mew',
}

goat.__proto__ = person;
console.log(goat.fullName());   //log mew gupta


// this is the example of prototype chain.
