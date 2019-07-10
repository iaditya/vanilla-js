//POLYFILL => code that add a feature which the engine may lack

if(!Object.create) {
    
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error('Only accept singlr param');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
    
}



// pure prototypal inheritance

var person = {
    fname: 'Default',
    lname: 'Default',
    hey: function() {
        return 'Hey, ' + this.fname; 
    }
} 

var john = Object.create(person);   // Object.create is new function for creating object is easy way but in modern JS engine

//If it's not available, then we use the concept of   =>  POLYFILL  => implements in above [line 3]  

console.log(john);   // empty object with proto of person object properties.

john.fname = 'John';
john.lname = 'Doe';

console.log(john);   // object with value of both and also have same proto of person object.

console.log(john.hey());  // Hey, John