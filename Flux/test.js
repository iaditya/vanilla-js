const emitter = require("./EventEmitter");
const dispatcher = require("./Dispatcher");

emitter.on("STARTED", function () {
  console.log("started");
});

emitter.on("STARTED", function () {
  console.log("started again");
});

//emitter.emit("STARTED");

dispatcher.register(function(action) {
    console.log("action received");
    console.log(action);
})
