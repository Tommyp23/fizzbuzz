var count, fizzer, buzzer, fizzbuzzer;
module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer, 
	fizzbuzzer: fizzbuzzer
};
count = function(start, end) {

	var output = buzzer(fizzer(fizzbuzzer(start)));

	for (var i = start; i < end; i += 1) {

		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1)));
	}

	return output;
};

fizzer = function(num) {
	if (0 === num % 3) {
	return "fizz";
	}
	return num;
	return 0 === num % 3 ? "fizz" : num; 
};
buzzer = function(num) { 
	// if (0 === num % 5) {
	// 	return "buzz";
	// }
	// return num; 
	return 0 === num % 5 ? "buzz" : num;
}; 

	fizzbuzzer = function(num) {
		return (0 === num % 3) && (0 === num % 5) ? "fizzbuzz" : num;
		return 0 === (num % 3 + num % 5) ? "fizzbuzz" : num;
		return 0 === num % 15 ? "fizzbuzz" : num;
	}; 