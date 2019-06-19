var mff = require('./map-filter-fold');

var mff = require('./map-filter-fold');

// set an array of values to get the sum of
var someArray = [1, 10, 100];

// define an add function
var add = function (x, y) {
	return x + y;
};

// output the sum of someArray
var foldedArray = mff.foldl(someArray, add); // 111
var foldedArray = mff.foldl(someArray, add, 1000); //1111

console.log(foldedArray);