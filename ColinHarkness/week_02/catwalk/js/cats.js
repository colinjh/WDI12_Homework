
var cat = document.getElementById('cat');
var city = document.getElementById('city')
// var dance = document.getElementById('dance');
//dance.style.opacity = 0;
cat.style.position = 'absolute';
city.style.position = 'absolute';
city.style.left = '1px';
cat.style.left = '1px';

movement = 2;
cityMove = 2;

var catToggle = function() {
  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + movement;
  cat.style.left = newLeft + 'px';

  var cityLeft = parseInt(city.style.left);
  var newCity = cityLeft + cityMove;
  city.style.left = newCity + 'px';

var screenWidth = window.innerWidth - cat.width;
var middle = (screenWidth/2);  

if ( parseInt( cat.style.left ) >= screenWidth ){
    movement =  -2;
    // cat.style.transform="scaleX(-1)";
  } else if ( parseInt( cat.style.left ) <= middle) {
    movement = 2;
    cityMove = -2
    // cat.style.transform="scaleX(1)";
	}
};

//dancing cat

// var dancing = function() {

// if parseInt(cat.style.left) >= (window.innerWidth/2) {
// 	dance.style.opacity = 1
// 	}else {
// 		dance.style.opacity = 0
// 	} 
// }		

// 	if (screenWidth === finalRight) {
//     delta = 20;
//     //console.log(finalRight);
//    // console.log(finalLeft);
//    }else if (screenWidth === finalLeft) {
//     delta = - 20;
//   }
// }; 

setInterval(catToggle, 50);
//setInterval(dancing, 1000) ;
// console.log("helloworld");



// var img = document.getElementById('cat');

// img.style.position = 'absolute';
// img.style.top = '0px';


// var watchBillFall = function() {
//   var oldTop = parseInt(img.style.top);
//   var newTop = oldTop + 10;
//   img.style.top = newTop + 'px';
// };

// setInterval(watchBillFall, 50);