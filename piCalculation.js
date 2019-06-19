var mff = require('./map-filter-fold');

var nums = [];
var i;
var n = 1000000;

for (i = 0; i < n; i++) { 
    nums[i] = i + 1;
};

//console.log(nums);

var invertedSquareNumsTimesSix = mff.map(nums, function(n){
    return 6 / (n * n);
});

//console.log(invertedSquareNumsTimesSix);


var foldedArray = mff.foldl(invertedSquareNumsTimesSix, function (x, y) {
	return x + y;
});

var pi = Math.sqrt(foldedArray)
console.log(pi);