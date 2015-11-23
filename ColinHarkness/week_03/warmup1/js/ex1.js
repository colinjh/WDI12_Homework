// Sum of Squares and Squares of Sums
// The sum of the squares of the first ten natural numbers is,

// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

// Make it so that it doesn't just work for the number 10.


var Squares = function(number) {

	sumOfSquares: function(number) {
	var sum = 0
	for (var i = 1; i <= number; i++) {
	sum += (i*i);
	return sum;
		}
	},

	squareofSums: function(number){
	for (var i = 1; i <= number; i++) {
	sum += i;
	return sum * sum;	
		}
	},

	difference: function(number) {
		var squareofSums = this.squareofSums(number);
		var sumOfSquares = this.sumOfSquares(number);

		return squareofSums - sumOfSquares;	
	}	



// var squareofSums = function(number) {
// 	var x = 0
// 	for (var i = 0; i < Things.length; i++) {
// 		Things[i]
// 	};
// }
	// squareNumber: function(number) {
	// 	var square = number*number;
	// 	square = squareNumber();
	// },
