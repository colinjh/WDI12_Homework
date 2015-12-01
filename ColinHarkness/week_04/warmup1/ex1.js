// Robot Warmup
// When robots come off the factory floor, they have no name.

// The first time you boot them up, a random name is generated, such as RX837 or BC811.

// Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.

// For bonus points

// Did you get it working and is the code clean? If you want to, these are some additional things you could try:

// Random names means a risk of collisions. Make sure the same name is never used twice.


var robot = {

			numbers: function() {
				num = Math.ceil(Math.random()*1000)
				return num;
			},
			letters: function() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				for (var i = 0; i < 2; i++) {
					text += possible.charAt(Math.floor(Math.random()*possible.length));
					return text;
				};

			},		
			create: function(){
				
				return{
					name: this.letters + this.numbers,
				}
			}
			// idCheck: function() {
			// 	var robotIds = ids.push(this.create);
			// 	for (var i = 0; i <robotIds.length; i++) {
			// 		if (this.create = robotIds[i]) {

			// 		};
			// 	};	

			// }
};