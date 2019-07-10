 // Flyweight Pattern - shares dataa across objects

// It's only useful when you have a lot of objects.



// var Task = function (data) {
//     this.name = data.name;
//     this.priority = data.priority;
//     this.completed = data.completed;
//     this.user = data.user;
//     this.project = data.project;
//   }
  
//  var TaskColletcion = function () {
    
//     var tasks = {},
//         count = 0;
    
//     var add = function(data) {
//       tasks[data.name] = new Task(data);
//       count ++;
//     }
    
//     var get = function(name) {
//       return tasks[name];
//     }
    
//     var getCount = function() {
//       return count;
//     }
    
//     return {
//       add: add,
//       get: get,
//       getCount: getCount
//     };
    
//   }
  
//   var tasks = new TaskColletcion();
  
//   var projects = ['none', 'courses', 'training', 'project'];
//   var priorities = [1,2,3,4,5];
//   var users = ['adi', 'shikha', 'laddu', 'peda'];
//   var completed = [true, false];
  
//   var initMemory = process.memoryUsage().heapUsed;
  
//   for(var i=0; i < 10000; i++) {
//     tasks.add({
//       name: 'task' + i,
//       priority: priorities[Math.floor( (Math.random() * 4) )],
//       project: projects[Math.floor( (Math.random() * 5) )],
//       user: users[Math.floor( (Math.random() * 3) )],
//       completed: completed[Math.floor( (Math.random() * 2) )],
//     });
//   }
  
//   var afterMemory = process.memoryUsage().heapUsed;
  
//   console.log("Memory used " + (afterMemory - initMemory) / 1000000);
  
//   console.log(tasks.getCount());



// Solution of above


var Task = function (data) {
  this.name = data.name;
  this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
}

var Flyweight = function (project, priority, user, completed) {
  this.priority = priority;
  this.completed = completed;
  this.user = user;
  this.project = project;
}

var FlyweightFactory = function() {

  var flyWeights = {};

  var get = function(project, priority, user, completed) {
    if(!flyWeights[project + priority + user + completed]) {
      flyWeights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
    }
    return flyWeights[project + priority + user + completed];
  }

  var getCount = function() {
    var count = 0;
    for(var f in flyWeights) count ++;
    return count;
  }

  return {
    get: get,
    getCount: getCount
  };

}();

var TaskColletcion = function () {
  
  var tasks = {},
      count = 0;
  
  var add = function(data) {
    tasks[data.name] = new Task(data);
    count ++;
  }
  
  var get = function(name) {
    return tasks[name];
  }
  
  var getCount = function() {
    return count;
  }
  
  return {
    add: add,
    get: get,
    getCount: getCount
  };
  
}

var tasks = new TaskColletcion();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['adi', 'sha', 'laddu', 'peda'];
var completed = [true, false];

var initMemory = process.memoryUsage().heapUsed;

for(var i=0; i < 10000; i++) {
  tasks.add({
    name: 'task' + i,
    priority: priorities[Math.floor( (Math.random() * 4) )],
    project: projects[Math.floor( (Math.random() * 5) )],
    user: users[Math.floor( (Math.random() * 3) )],
    completed: completed[Math.floor( (Math.random() * 2) )],
  });
}

var afterMemory = process.memoryUsage().heapUsed;

console.log("Memory used " + (afterMemory - initMemory) / 1000000);

console.log(tasks.getCount());
console.log(FlyweightFactory.getCount());

