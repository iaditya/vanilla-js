// for json , key/property must be under quotes. Every json is js object literal.


//this is JS object literal
var person = {
    name: 'aditya',
    address: 'Hyderabad',
};

//convert to json

console.log(JSON.stringify(person));

//convert to JS Obj. Lit.

console.log({"name":"aditya","address":"Hyderabad"});