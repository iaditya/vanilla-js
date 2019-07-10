var Task = require('./Task');


// observers

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
// end observers decalaration


// ObserverList
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.count = function(obj) {
    return this.observerList.length;
}

ObserverList.prototype.get = function(index) {
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.removeAt = function(index) {
    if(index < this.observerList.length ) {
        return this.observerList.splice(index, 1);
    }
    
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;
    while(i< this.observerList.length) {
        if(this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
    
}



// creating subject - Observable Task
function ObservableTask(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

ObservableTask.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for(var i=0; i< observerCount; i++) {
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.save = function() {

    this.notify(this); // @todo not understood

    Task.prototype.save.call(this);
}


var t = new ObservableTask({name: "important todo", user: "adi"});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

t.addObserver(not.update);
t.addObserver(ls.update);
t.addObserver(audit.update);

t.save();
console.log("-------");

t.removeObserver(not.update);

t.save();