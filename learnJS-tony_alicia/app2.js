// testing underscore.js



var arr = [1,2,3];

var arr1 = _.map(arr, function(item) {
  return item * 2;
})

console.log(arr1);


var list = [1,2,3,4,5,6,7,8,9,10];

var nList = _.filter(list, function(item) {
  return item % 2 == 0;
});

console.log(nList);
