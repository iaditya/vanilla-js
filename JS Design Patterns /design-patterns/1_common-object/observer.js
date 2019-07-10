var Book = function (name, price) {

    var priceChanging = [],
     priceChanged = [];

    this.name = function(val) {
        return name;
    }

    this.price = function(val) {
        return price;
    }

    this.onPriceChanging = function(callback) {
        priceChanging.push(callback);
    }

    this.onPriceChanged = function(callback) {
        priceChanged.push(callback);
    }

}


var book = new Book("JS", 12.3);

console.log("The name is " + book.name());

console.log("The price is $" + book.price());

book.onPriceChanging(function(b, price) {
    if(price > 100) {
        console.log("Error! The price has gone unexpectedly high.");
        return false;
    }
    return true;
});

book.onPriceChanged(function(b) {
    console.log("The price has changed to $" + b.price());
});