//call by value  ,   For primitives,  sets up new memory space
var a = 3;

b = a;

a = 4;

console.log(a);
console.log(b);

// call by reference ,   For objects (including functions)

var c = {name: 'adi'};

d = c;

c.name = 'shikha';

console.log(c);
console.log(d);

// call by reference ,   for paramateres

function change(a) {
    a.name = 'newName';
}

change(c);
console.log(c);
console.log(d);

//equals sets up new memory location ,   '='

c = {'name': 'equalName'};

console.log(c);
console.log(d);
