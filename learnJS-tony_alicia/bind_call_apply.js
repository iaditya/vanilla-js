var person = {

    first_name : 'aditya',
    last_name : 'gupta',
    full_name : function() {
        var full_name = this.first_name + ' ' + this.last_name;
        return full_name;
    }
};


var greet = function(varA, varB) {
    console.log(this.full_name());
    console.log('Arguments ' + varA + '  ' + varB);
    console.log("--------");
}

//greet(); //got error

var greetN = greet.bind(person);
console.log(greetN);

greetN();

//greetN('adi', 'sha');

//we can also call
/**

    var greet = function() {
    console.log(person.full_name());
}.bind(person);

**/

// call () function executes the function, not makes copy like bind()

greet.call(person, 'en', 'es');

greet.apply(person, ['spanish', 'english']);



//this is function borrowing

person2 = {
    first_name: 'akash',
    last_name : 'pansari',
}

console.log(person.full_name.apply(person2));
