// chaining

function Calc(start) {

    this.add = function(n) {
        start += n;
        return this;
    }
    this.multiply = function(n) {
        start *= n;
        return this;
    }
    this.log = function(callback) {
        callback(start);
        return this;
    }

}

new Calc(5).add(3).multiply(2)
.log(function(result) {
    console.log(result);
}).add(2).log(function(result) {
    console.log(result);
});