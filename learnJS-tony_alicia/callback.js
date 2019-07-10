function sayHi() {
    
    var greet = 'hi';
    
    setTimeout(function() {
        console.log(greet);
    }, 4000);
}

sayHi();


function work(callback) {
    
    callback();
}

work(function(){
    console.log('I am done');
});

work(function(){
    console.log('All done');
});