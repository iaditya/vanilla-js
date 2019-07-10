var Emitter = require('./Emitter');

var emtr = new Emitter();

console.log(emtr);

emtr.on('succ', function() {
	console.log("succ");
})

emtr.on('danger', function() {
	console.log("d1");
})

emtr.on('succ', function() {
	console.log("succ2");
})

emtr.on('danger', function() {
	console.log("d2");
})

emtr.emit('succ');
emtr.emit('danger');

console.log(emtr);

