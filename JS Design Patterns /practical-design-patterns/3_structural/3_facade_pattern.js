// Used to provide a simple interface to a complicated system.
// React components follows the facade pattern.


var TaskService = function () {

    return {
        save: function (task) {
            console.log("saving " + task.name);
        },
        complete: function (task) {
            console.log("completing " + task.name);
        }
    }
}

var task = new Task({
    name: 'adi',
    preority: 2,
    completed: false
});

TaskService.complete(task);
if (task.complete === true) {
    TaskService.save(task);
}

// solution
var TaskWrapper = function () {
    return {
        completeAndSave: completeAndSave
    }

    function completeAndSave(task) {
        TaskService.complete(task);
        if (task.complete === true) {
            TaskService.save(task);
        }
    }
}();

TaskWrapper.completeAndSave(task);

