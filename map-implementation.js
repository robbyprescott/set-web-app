var mff = require('./map-filter-fold');

// Sample Implementation of Map

var someDollars = [2.5, 10, 50, 1];
var toCents = function (n) {
	return n * 100;
};

var someCents = mff.map(someDollars, toCents); // nice and easy to read

console.log(someCents);
// == [250, 1000, 5000, 100]