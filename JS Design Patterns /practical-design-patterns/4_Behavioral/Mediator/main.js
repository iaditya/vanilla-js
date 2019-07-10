var Task = require('./Task');


// services
var notificationService = function() {
    var message = "Notifying ";
    this.update = function(task) {
        console.log(message + task.user + 'for task: ' + task.name);
    }
}

var loggingService = function() {
    var message = "Logging ";
    this.update = function(task) {
        console.log(message + task.user + 'for task: ' + task.name);
    }
}

var auditingService = function() {
    var message = "Auditing ";
    this.update = function(task) {
        console.log(message + task.user + 'for task: ' + task.name);
    }
}
// end services decalaration

// mediator

var meidator = (function() {

    var channels = {};

    var subscribe = function(channel, context, func) {
        if(!meidator.channels[channel]) {
            meidator.channels[channel] = [];
        };
        meidator.channels[channel].push({context: context, func: func}); 
    }

    var publish = function(channel) {
        if(!this.channels[channel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1); 

        for(var i=0; i < this.channels[channel].length; i++) {
            var sub = this.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };

}());





var t = new Task({name: "important todo", user: "adi"});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

meidator.subscribe('complete', not, not.update);
meidator.subscribe('complete', ls, ls.update);
meidator.subscribe('complete', audit, audit.update);

t.complete = function() {
    meidator.publish('complete', this);
    Task.prototype.complete.call(this);
}

t.complete();
