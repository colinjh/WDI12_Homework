// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:



var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Station", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var mtaLine = [lineN, lineL, line6];

var start;
var stop;


var mtaStart = mtaLine[line1].indexOf(start);
var mtaStop = mtaLine[line2].indexOf(stop);
var intersect1 = mtaLine[line1].indexOf("Union Square");
var intersect2 = mtaLine[line2].indexOf("Union Square");



// start > end for for forward

var planTrip = function(line1, start, line2, stop) {
	var lineN = 0;
	var lineL = 1;
	var line6 = 2;

if (line1 === line2) {
	var trip1 = [];	
		for (var i = mtaStart; i < mtaStop; i++) {	
			if(i !== mtaStop) {
				trip1.push(mtaStop[i]);
					console.log(trip1);
				}
				 
		}	else { 
			trip1.push(mtaStart[i]);
			console.log(trip1);
			}
	}
else
	var trip2 = [];
		for (var i = mtaStart; i < intersect1; i++) {	
			if(i !== mtaStop) {
			trip2.push(mtaStart - intersect1);
			console.log(trip2);
		}
	}
		console.log("Union Square");
		
	var trip3 = [];
		for (var i = mtaStop; i < intersect2; i++) {
			if(i !== mtaStop) {
			trip3.push(mtaStop - intersect2);
			console.log(trip3);	
			}
		}
};					
// if (line !== line2) {


// 		for (var i = lineN.indexOf(start); i < lineN.indexOf(stop); i++) {	
// 		if(i !== lineN.indexOf(stop)){
// 			var forwards = lineN.indexOf(stop) - lineN.indexOf(start);
// 			console.log("Number of stops" +forwards ) } 
// 		};
// 	}else{
// 		for (var i = lineN.indexOf(stop); i < lineN.indexOf(start); i++) {	
// 		if(i !== lineN.indexOf(start)){
// 			var backwards = lineN.indexOf(start) - lineN.indexOf(stop);
// 			console.log("Number of stops" +backwards ) }
// 			}
		
// 	};	
// };	   






//		for (var i = lineN.indexOf(stop); i < 0; i++) {	
	//	if(i !== lineN.indexOf(start)){
	//		var backwards = lineN.indexOf(start) - lineN.indexOf(stop);
		//	console.log("Number of stops" +backwards +" b")
		
	//if (line1 !== line2)
		//for (var i = 0; i <line.length; i++) {
		//[i]
//		};
//	}

//make it work backwards
///Does it use more than one line


