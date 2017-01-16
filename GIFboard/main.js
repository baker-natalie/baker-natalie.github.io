//HTML variables
var HTMLgifDiv = '<div class="gif"></div>';

var visionBoard = {
	gifs: [ 'url(https://media.giphy.com/media/TZKN33JOD2yQ/giphy.gif)', 'url(https://media.giphy.com/media/Vwz4zdntMXrUY/giphy.gif)', 'url(https://media.giphy.com/media/3o6Zt3AX5mSM29lGUw/giphy.gif)', 'url(https://media.giphy.com/media/l0MYIC3CENWKuZZjW/giphy.gif)', 'url(https://media.giphy.com/media/3orieVaEDcLoNbCKCQ/giphy.gif)', 'url(https://media.giphy.com/media/xT0BKhunZXlEsnpz7q/giphy.gif)'
	]
}

visionBoard.display = function() {
	this.shuffledGifs = [];
	
	this.shuffle = function(array) {
  		var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

    		// Pick a remaining element…
    		i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
 		 }
		console.log(array);
		return array;
	}
	
	this.shuffledGifs = this.shuffle(visionBoard.gifs);

	for (var i = 0; i < this.shuffledGifs[i].length; i++) {
		$(".vision-board").append(HTMLgifDiv);
		$(".gif:last").css('background-image', this.shuffledGifs[i]);
	}
}
visionBoard.display();