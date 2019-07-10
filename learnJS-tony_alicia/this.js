var a = function() {
    console.log(this);
}

a();   // window object

function b() {
    console.log(this);
    this.name = 'aditya';
}
b();
console.log(name);

var c = {
    name: 'adisha',
    d: function() {
        console.log(this.name);
    },
    e: function() {
        console.log(this.name);

        var f = function(newname) {
            this.name = newname;
        }
        f("amit");

        function change(newN) {
            this.name = newN;
        }
        change("akash");

    },
};

console.log(c);
c.d();
c.e();
console.log(name);


var z = {
    name: 'aliya',
    log: function(){
        var self = this;
        console.log(this.name);

        function change(newName) {
            //this.name = newName;          // this => is global object
            self.name = newName;
        }

        change("shikha");

    }
};

z.log();

console.log(z.name);
console.log(z);
