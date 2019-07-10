function Person() {
    
    this.fname = 'adi';
    this.lname = 'l';
}


var person = new Person();

console.log(person);

function People (fname, lname) {
    console.log(this);
    
    this.fname = fname;
    this.lname = lname;
    
    console.log("function is invoked");
}

var akash = new People('Akash', 'H');
var shikha = new People('shikha', 'G');

console.log(akash);
console.log(shikha);


// prototype  ---- not initiate every time , In object creation.

People.prototype.getName = function() {
    
    console.log(this.fname + ' ' + this.lname);
    
}

akash.getName();
shikha.getName();
