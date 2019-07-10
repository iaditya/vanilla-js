function greet(name) {

    return function(say) {
        console.log(name + '  ' + say);
    }

}

greet('aditya')('hello');

var say = greet('aditya');
console.log(say);
say('hello');

//Above working because of closure


function chat() {

    var arr = [];

    for(var i=0; i < 3; i++) {
        arr.push(function() {
          //return i;  // 0,1,2            // i is the closure value 3,3,3
            console.log(i); //3,3,3
        });
    }
    return arr;
}

var vm = chat();
console.log(vm);
vm[0]();     //3
vm[1]();     //3
vm[2]();     //3




function clos() {

    var arr = [];

    for(var i = 0; i < 3; i++) {
        let j = i;                        // j is the block value = 0,1,2

        arr.push(function() {
            console.log(j);
        });

    }
    return arr;

}

//console.log(clos());

var fs = clos();
console.log(fs);

fs[0]();       //0
fs[1]();       //1
fs[2]();       //2





function ls() {

    var arr = [];

    for(var i = 0; i < 3; i++) {

        arr.push(
            (function(j) {
                return function() {             // j is the closure value but => 0,1,2
                  console.log(j);
                }
            })(i)
        );

    }
    return arr;

}

ls();

var adi = ls();

console.log(adi);

adi[0]();       //0
adi[1]();       //1
adi[2]();

// ls()  print    //0
                  //1
                  //2
