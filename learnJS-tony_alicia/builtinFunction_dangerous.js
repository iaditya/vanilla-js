var a = Number(3);   // this is not function constructor , this is change type ex - Number("3") return 3 as type of number.

var b = new Number(3);

var c = 3;


console.log(a===b);   // false   =>  b is object 

console.log(a==b);      // true

console.log(typeof(a));    //number

console.log(typeof(b));    //object

console.log(typeof(c));    //number


// another for array
// so array is object in JS

var arr = ['adi', 'sha'];

for (prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}  // log =>  0 adi
   //         1 sha

Array.prototype.newFunc = "aditya";

for (prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}  // log =>  0: adi
   //         1: sha
   //         newFunc: aditya 