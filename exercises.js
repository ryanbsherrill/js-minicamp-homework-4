'use strict';

//Do not change any of the function names

function multiplyArguments() {
	var argSum = 1;
	if (arguments.length === 0) return 0;	
	else if (arguments.length === 1) return arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		argSum *= arguments[i];
	}
	return argSum;
}

function invokeCallback(cb) {
	return cb();
}

function sumArray(numbers, cb) {
	var sum = numbers.reduce(function(rt, num) {
		return rt += num;
	});
	cb(sum);
}

function forEach(arr, cb) {
	arr.forEach(function(item) {
		cb(item);
	});
}

function map(arr, cb) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		newArray.push(cb(arr[i]));
	}
	return newArray;
}

function getUserConstructor() {
	var User = function(options) {
		this.username = options.username;
		this.name = options.name;
		this.email = options.email;
		this.password = options.password;
	};
	User.prototype.sayHi = function() {
		return 'Hello, my name is ' + this.name;
	};
	return User;
}

function addPrototypeMethod(Constructor) {
	Constructor.prototype.sayHi = function() {
		return 'Hello World!';
	};
}

function addReverseString() {
	String.prototype.reverse = function() {
		return this.split('').reverse().join(''); 
	};
}

function nFactorial(n) {
	if (n <= 1) {
		return 1;
	}
	return n * nFactorial(n - 1);
}

function cacheFunction(cb) {
	var cache = {};
	return function(arg) {
		if (arg in cache) return cache[arg];
		else cache[arg] = cb(arg);
		return cache[arg];
	};
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
	multiplyArguments: multiplyArguments,
	invokeCallback: invokeCallback,
	sumArray: sumArray,
	forEach: forEach,
	map: map,
	getUserConstructor: getUserConstructor,
	addPrototypeMethod: addPrototypeMethod,
	addReverseString: addReverseString,
	nFactorial: nFactorial,
	cacheFunction: cacheFunction
};
