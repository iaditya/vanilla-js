var repo = {

    // will add , what we are saving
    tasks : {},

    // push, what we executing - fun & args
    commands : [],
    get: function(id) {
        console.log('Getting task ' + id);
        return {
            name: "new task"
        }
    },

    save: function(task) {
        repo.tasks[task.id] = task;
        console.log('saving.. ' + task.name + ' to the db');
    },

    // run over commands array and rexecute them
    replay: function() {
        repo.commands.forEach(function(command) {
            //command.name(command.obj);

            
            repo.executeNoLog(command.name, command.obj);
        });
    }
}


repo.executeNoLog = function(fun_name) {
    
    var args = Array.prototype.slice.call(arguments, 1);

    if(repo[fun_name]) {
        return repo[fun_name].apply(repo, args);
    }
}


repo.execute = function(fun_name) {

    var args = Array.prototype.slice.call(arguments, 1);

    repo.commands.push({
        name: fun_name,
        obj: args[0]
    });

    if(repo[fun_name]) {
        return repo[fun_name].apply(repo, args);
    }
    return false;
}


repo.execute('save', {
    id: 1,
    name: 'taskqq'
});
repo.execute('save', {
    id: 2,
    name: 'taskqq'
});
repo.execute('save', {
    id: 3,
    name: 'taskqq'
});
repo.execute('save', {
    id: 4,
    name: 'taskqq'
});

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);
