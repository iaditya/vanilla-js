if(!Function.prototype.bind) {

    Function.prototype.bind = function(whoIsCallingMe) {
        var fn = this; //refer Function
        var args = Array.prototype.slice.call(arguments, 1);


        if(typeof(fn) !== 'function') {
            throw new TypeError('Function.prototype.bind - context must be a valid function');
        }

        return function() {
            return fn.apply(whoIsCallingMe, args.concat(Array.prototype.slice.call(arguments)));
        }

    }
}
