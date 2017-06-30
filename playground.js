function cacheFunction(cb) {
	var cache = {};
	return function(arg) {
		for (var key in cache) {
			if (cache[key] === arg) {
				return cb(key);
			}
			cache[arg] = cb(arg);
			return cb(arg);
		}
	}
};

	var cache = {};
	return function (single_argument) {
		if (cache.hasOwnProperty(single_argument)) {
			return cache[single_argument];
		} else {
			cache[single_argument] = cb(single_argument);
			return cache[single_argument];
		}
	};
		//use closure to create a cache for the cb function
	//the function that you return should accept a single argument and invoke cb with that argument
	//when the function you return is invoked with an argument it should save that argument and its result
	//when the function you return is called again with an argument that it has seen before it should not call cb
	//but should instead directly returned the previous result
	//example:
	//cb -> function(x) { return x * x; }
	//if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	//if the function you return is invoked again with 5 it will look on an object in the closure scope
	//and return 25 directly and will not invoke cb again