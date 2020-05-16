if(!Function.prototype.apply) {
    Function.prototype.apply = function(whoIsCallingMe, arr) {
        var fnContext = this;
        var args = Array.prototype.slice.call(arguments, 1);

        if(typeof(fnContext) !== 'function') {
            throw new TypeError('Function.prototype.apply - context must be a valid function');
        }

        return fnContext.call(whoIsCallingMe, args)
    }
}