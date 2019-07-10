function abc(name) {
    console.log("hello " + name);
}

abc("aditya");

var cxy = function (name) {
    console.log("hello " + name);
}

cxy("aditya");

//immediately Invoked function expressions

var iife = function(name) {
    console.log("Hello " + name);
}("aditya");



"string";
1;
{
    name: 'aditya'
}

//got error
/**                       must be function statement
function(name) {
    return "Hello " + name;
}("adi");

function(name) {
    return "Hello " + name;
}
**/

//iife - immediately Invoked function expressions


// expression inside paranthesis. eg => (3+5)

(function(name) {
    console.log("Hello " + name);
}("adi"));

(function(name) {
    console.log("Hello " + name);
})("sha");
