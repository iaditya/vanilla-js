;(function(window){

	//we will be building thee types of games- Flashcards, Solitaire, Hearts

	// Game
	// options -> based on game you play we pass the data, elem-> html elem
	var Game = function(elem, option) {
		this.elem = document.getElementById(elem);
		this.option = option;

		//building dynamic elements

		//Info section
		this.info_div = document.createElement('div');
		this.info_div.id = 'info_div';

		//deck section
		this.deck_div = document.createElement('div');
		this.deck_div.id = 'deck_div';
		this.game_deck = new Deck(this.deck_div, option);
		this.game_deck.buildDeck();

		//discard pile
		//rules

		this.elem.appendChild(this.info_div);
		this.elem.appendChild(this.deck_div);
	}

	window.Game = Game;  // Now Game construction function available in window object.
	

	// Deck
	var Deck = function(deck_div, option) {
		this.deck_data = option.data;

		this.buildDeck = function() {
			var parentFrag = document.createDocumentFragment();  // is node in memory not part of actual DOM.
			deck_div.innerHTML = "";
			for(var i= this.deck_data.length-1; i>=0; i--) {
				var card = new Card();
				card.id = "card-" + i;
				card.data = this.deck_data[i];
				card.buildCard(parentFrag);
			}
			deck_div.appendChild(parentFrag);
		}
		
	}


	// Deck
	var Card = function() {}


	// Deck
	var DiscardPile = function() {}

})(window);
