var obj = {};

// create object

// var obj = {};
// var obj2 = Object.create(Object.prototype); // inheritence
//var obj3 = new Object ();

Object.defineProperty(obj, 'name', {
    value: "adisha",                           // deafult is undefined
    enumerable: true,                          // deafult is false, once set to false then can not change any propery only update the 'writable'
    configurable: true,                        // deafult is false, if true then can access all the property by for in loop
    writable: true                             // deafult is false, if true then can modify the property
});