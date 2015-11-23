// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

var array = ["enlists", "google","inlets", "banana"]

var arraySplit = function(array){
	for (var i = 0; i < array.length; i++) {
	 var arraySplit = array[i].split('').sort().join('');
	 return arraySplit;
	}
}; 


var anagram = function(word){
	var letters = word.split('').sort().join('');
	
	if(arraySplit === letters){
		console.log(arraySplit.join(''));
	}else{
		console.log("no anagram");
	} 
	};


// var Anagram = {
// 	hasSameLetters: function( word, candidate) {
// 		word = word.split("").sort().join("");
// 		candidate = candidate.split('').sort().join("");
		
// 		return word === candidate;
// 	},

// areAnagrams: function (word, candidate) {
// 	if (Anagram.hasSameLetters(word, candidate) && word !==candidate){
// 		return true;
// 	}
// }		return false;

// matches: function(word, candidates) {
// 	var anagram = [];
// 	for (var i = 0; i candidates.length; i++) {
// 		var potentialWord = candidates[i];
// 	if ( Anagram.areAnagrams(word, potentialWord)){
// 		anagrams.push( potentialWord );	
// 	}
// }

// var word = "listen"
// var potentialWords