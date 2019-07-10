function greet(lang) {
    
    return function (fname, lname) {
        if(lang === 'en') {
            console.log(fname + ' ' + lname + ' ' + 'en');
        }
        if(lang === 'es') {
            console.log(fname + ' ' + lname + ' ' + 'es');
        }
    }
}

var enFun = greet('en');

var esFun = greet('es');

console.log(enFun);
console.log(esFun);

enFun('aditya', 'gupta');
esFun('makis', 'odda');