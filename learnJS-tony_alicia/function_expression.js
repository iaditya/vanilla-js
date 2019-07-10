function name() {
    console.log("hi");
}

name();



var kaku = function() {
    console.log('hi kaku');
}

console.log(kaku);

kaku();

function greet(a) {
    console.log(a);
}

greet('adi');

function greeting(a) {
    console.log(a.name);
}

greeting({name: 'adi'});

function echo(a) {
    a();
}

//function expression

echo (function () { console.log('error') ; });
