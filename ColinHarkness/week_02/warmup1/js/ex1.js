// Scrabble Score
// Write a JS function that, given a word, computes the scrabble score for that word.

// It should look like the following:

// Scrabble.score("cabbage")
// # => 14
// Letter Values

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions (we won't tell you how to implement this!)

// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.
var score = {
	[value: 1, letter: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
	[value: 2, letter: "D", "G"], 
	[value: 3, letter: "B", "C", "M", "P"],
	[value: 4, letter: "F", "H", "V", "W", "Y"]
	[value: 5, letter: "K"]
	[value: 8, letter: "J", "X"]
	[value 10, letter: "Q", "Z"]}


var scrabble = function(word) {
	var wordsplit = word.split('');
	var total = 0
	console.log(total += wordsplit);


}