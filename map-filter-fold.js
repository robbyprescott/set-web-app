var map = function (obj, iterator, thisArg) {

	// prepare the result variable
	var result = [];

	// pass control to native map if it's available
	if (Array.prototype.map && obj.map === Array.prototype.map) {
		return obj.map(iterator, thisArg);
	}

	// otherwise, use our version of map
	forEach(obj, function (value, index, list) {
		// push the value returned from the iterator onto result
		result[result.length] = iterator.call(thisArg, value, index, list);
	});

	// return the new updated array
	return result;
};

var filter = function (obj, iterator, thisArg) {

	// prepare the result variable
	var result = [];

	// pass control to the native filter if it's available
	if (Array.prototype.filter && obj.filter === Array.prototype.filter) {
		return obj.filter(iterator, thisArg);
	}

	// otherwise use our own filter
	forEach(obj, function (value, index, list) {

		// if the result of passing a value through the function
		// is true, then add that value you to the new list
		if (iterator.call(thisArg, value, index, list)) {
			result[result.length] = value;
		}
	});

	// return the new list
	return result;
};

var foldl = function (obj, iterator, accu, thisArg) {

	// set a variable that tells us if an accumulator was set
	var hasAccu = arguments.length > 2;
	
	// pass control to the native foldl if it's available
	if (Array.prototype.reduce && obj.reduce === (Array.prototype.reduce)) {
		// if accumulator present, pass it
		return hasAccu ? obj.reduce(iterator, accu) : obj.reduce(iterator);
	}

	// otherwise use our own definition of foldl
	forEach(obj, function (value, index, list) {

		// set the accu to the first value, if accu wasn't 
		// supplied as an argument
		if (!hasAccu) {
			accu    = value;
			hasAccu = true;
		} else {
			accu = iterator.call(thisArg, accu, value, index, list);
		}
	});

	// return the final value of our accumulator
	return accu;
};

module.exports = {
	map: map,
	filter: filter,
	foldl: foldl
};