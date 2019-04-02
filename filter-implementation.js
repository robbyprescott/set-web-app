var mff = require('./map-filter-fold');

// make an array of values to filter
var someArray = ["Large", 20, "100", 4];

// make a function that returns true if its argument is a number
var isNumber = function (x) {
	return typeof x === 'number';
};

// output a filtered array
var filteredArray = mff.filter(someArray, isNumber);
// == [20, 4]