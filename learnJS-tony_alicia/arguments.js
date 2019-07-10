function name(a, b, c) {

    a = a || 'Ram';
    b = b || 'Laxman';

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arguments);
    console.log(typeof(arguments));   // object
    console.log(arguments.length);
    console.log("--------");
}

name();
name('adi');
name('adi', 'adisha');
name('adi', 'adisha', 'shikha');
