// ---------------- callbacks --------------------- //

// 1 // use this code correctly
function adder(number1, number2, cb) {
	var result = 0000;
	var err = null;
	if((typeof number1 == 'number') && (typeof number2 == 'number')) {
		result = number1 + number2;
	} else {
		err = 'arguments arent numbers';
	};
	cb(err, result);
};

adder(/**/);


// 2 // this code is synchronous, write a version that isn't
function devSideCode(result) {
	if(typeof result != 'number') {
		console.log('argument is not a number');
	} else {
		console.log(result);
	};
};

function importedModule(number1, number2) {
	var result = 0000;
	result = number1 + number2;
	return result;
};

var resultCarrier = importedModule(3, 4);
devSideCode(resultCarrier); // -> 7

var resultCarrier = importedModule(3, 'tim');
devSideCode(resultCarrier); // -> argument is not a number

// 3 // pseudocode the function called 'arrayReverserModuleSide'
arrayReverser([3, 4, 5, 6, 7], cb(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
});  // -> [7, 6, 5, 4, 3]

arrayReverser({3, 4, 5, 6, 7}, cb(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
});  // -> argument was not an array