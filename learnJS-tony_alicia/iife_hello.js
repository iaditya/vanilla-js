console.log(greet); //global

(function() {
    var name = "hello";
    console.log(name);
}());


(function(name) {
    var greet = "hello";
    console.log("greet " + name);
}('aditya'));

(function(global, name) {
    var greet = "hello";
    console.log(global.greet + ' ' + name);
}(window, 'aditya'));


//now change global valueOf

(function(global, name) {
    global.greet = "hello";
    console.log(global.greet + ' ' + name);
}(window, 'aditya'));