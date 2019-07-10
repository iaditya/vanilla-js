var arr = [1, 2, 3];

var arr1 = [];

for(var i=0; i<arr.length; i++) {
  arr1.push(arr[i] * 2);
}

console.log(arr);
console.log(arr1);


function mapForEach(arr, fn) {
  var newArr = [];

  for(var i=0; i<arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr2 = mapForEach(arr, function(item) {
  return item * 2;
});

console.log(arr2);

function limit(limiter, item) {
  return item > limiter;
}

var arr3 = mapForEach(arr, limit.bind(this, 1));
console.log(arr3);

function simpleLimit(limit) {
  return function(limit, item) {
    return item > limit;
  }.bind(this, limit);
}


arr5 = mapForEach(arr, simpleLimit(2));
console.log(arr5);
