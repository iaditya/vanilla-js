;(function(window){

	//we will be building thee types of games- Flashcards, Solitaire, Hearts

	// Game
	//elem -> html elem
	// options -> based on game you play we pass the data
	var Game = function(elem, option) {
		this.elem = document.getElementById(elem);
		this.option = option;
	}

	window.Game = Game;  // Now Game construction function available in window object.
	


})(window);
