if(!Function.prototype.bind) {

    Function.prototype.bind = function(whoIsCallingMe) {
        var currentContext = this; //refer Function
        var args = Array.prototype.slice.call(arguments, 1);


        if(typeof(currentContext) !== 'function') {
            throw new TypeError('Function.prototype.bind - context must be a valid function');
        }

        return function() {
            return currentContext.apply(whoIsCallingMe, args.concat(Array.prototype.slice.call(arguments)));
        }

    }
}
