// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

// Shortest intro to biochemistry EVAR:

// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.

// So back to nucleotides.

// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

// There are no other nucleotides.

// Make sure that you validate it has nucleotides!

// Find how many of each nucleotides are in a string that you pass in to a function


var nucleotide =   {
	count: function (string, letter) {
		var nucleotideCount = 0;
	for (var i = 0; i < string.length; i++) {
		var character = string[i];
		 if (character === letter); {
		 return result = nucleotideCount +=1;
		};	

	}

}
}

console.log(nucleotide.count( "AATTA", "A"));









// ["A", "C", "G", "T"];
// var nuc = function(string){
// 	var string = [];
// 	for (var i = 0; i < nucleotides.length; i++) {
// 		for (var i = 0; i < string.length; i++) {
// 			if (string[i] === nucleotides[i]){
// 				string.push();
// 			}else{
// 				console.log("no nucleotides");	
// 					}
// 				}
// 			}
// 		};
// nuc("ACG");		