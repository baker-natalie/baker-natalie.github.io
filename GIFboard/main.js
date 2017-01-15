//HTML variables
var HTMLgifDiv = '<div class="gif"></div>';

/*var visionBoard = {
	gifs: [ 'url(https://media.giphy.com/media/TZKN33JOD2yQ/giphy.gif)', 'url(https://media.giphy.com/media/Vwz4zdntMXrUY/giphy.gif)', 'url(https://media.giphy.com/media/3o6Zt3AX5mSM29lGUw/giphy.gif)', 'url(https://media.giphy.com/media/l0MYIC3CENWKuZZjW/giphy.gif)', 'url(https://media.giphy.com/media/3orieVaEDcLoNbCKCQ/giphy.gif)', 'url(https://media.giphy.com/media/xT0BKhunZXlEsnpz7q/giphy.gif)'
	]
}*/
var visionBoard = {
	gifs: [
		{
			url : 'url(https://media.giphy.com/media/TZKN33JOD2yQ/giphy.gif)'
		},
		{
			url : 'url(https://media.giphy.com/media/Vwz4zdntMXrUY/giphy.gif)'
		},
		{	
			url : 'url(https://media.giphy.com/media/3o6Zt3AX5mSM29lGUw/giphy.gif)'
		},
		{
			url : 'url(https://media.giphy.com/media/l0MYIC3CENWKuZZjW/giphy.gif)'
		},
		{
			url : 'url(https://media.giphy.com/media/3orieVaEDcLoNbCKCQ/giphy.gif)'
		},
		{
			url : 'url(https://media.giphy.com/media/xT0BKhunZXlEsnpz7q/giphy.gif)'
		}
	]
};

visionBoard.display = function() {
	for (var i = 0; i < visionBoard.gifs.length; i++) {
		$(".vision-board").append(HTMLgifDiv);
		$(".gif:last").css('background-image', visionBoard.gifs[i].url);
	};
};

visionBoard.display();
	
/*var shuffle = function(array) {
	var currentIndex= array.length, temporaryValue, randomIndex;
	
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

visionBoard.display = function() {
	var shuffledGifs = shuffle(visionBoard.gifs);
	
	for (var i = 0; i < shuffledGifs.length; i++) {
		$(".vision-board").append(HTMLgifDiv);
		$(".gif:last").css('background-image', shuffledGifs[i].url);
	}
}
visionBoard.display();*/