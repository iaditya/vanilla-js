//false
if("") {
    console.log(true);
} else {
    console.log(false);
}

//false
if(undefined) {
    console.log(true);
} else {
    console.log(false);
}

//false
if(null) {
    console.log(true);
} else {
    console.log(false);
}

var a = 0;
//false
if(a) {
    console.log(true);
} else {
    console.log(false);
}

//true
if(a || a===0) {
    console.log(true);
} else {
    console.log(false);
}