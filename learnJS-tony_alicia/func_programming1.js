// functional programming.


var arr = [1, 2, 3];
console.log(arr);

//var arr1 = [];

/**
for(var i =0; i < arr.length; i++) {
    arr1.push(arr[i] * 2);
}
*/

function forEach (arr, fn) {

    var newArr = [];

    for(var i =0; i < arr.length; i++) {

        newArr.push(fn(arr[i]));
    }
    return newArr;
}

var arr1 = forEach(arr, function(item) {
    return item > 2;
});

console.log(arr1);

var checkLimit = function(limit, item) {
    return item > limit;
}


var arr2 = forEach(arr, checkLimit.bind(this, 1));

console.log(arr2);

function checkLimitSimplified(limit) {
  // return function object
    return function(limit, item) {
        return item > limit
    }.bind(this, limit);
}

var arr3 = forEach(arr, checkLimitSimplified(1));

console.log(arr3);











//console.log(arr1);
