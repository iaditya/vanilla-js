var a = new Array();

console.log(a);

var b = [];

console.log(b);

var c = [
    1,
    true,
    {
        name: "aditya",
    },
    function(name) {
        console.log(this);
        //this point to array object
        var greet = "hello ";
        console.log(greet + name);
    },
    "hello"
];

console.log(c);

c[3]("aditya");

