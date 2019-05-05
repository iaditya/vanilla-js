; (function (window) {

	//we will be building thee types of games- Flashcards, Solitaire, Hearts

	// Game
	// options -> based on game you play we pass the data, elem-> html elem
	var Game = function (elem, option) {
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


	// Deck
	var Deck = function (deck_div, option) {
		this.deck_data = option.data;

		this.buildDeck = function () {
			//var abc = 123;
			var parentFrag = document.createDocumentFragment();  // this node in memory not part of actual DOM.
			deck_div.innerHTML = "";
			for (var i = this.deck_data.length - 1; i >= 0; i--) {
				var card = new Card();
				console.log(this.deck_data[i]);
				card.id = "card-" + i;
				card.data = this.deck_data[i];
				card.buildCard(parentFrag);
			}
			deck_div.appendChild(parentFrag);
		}

	}


	// Card
	var Card = function () {
		console.log(this);
		this.id = "";
		this.data = "";

		this.cardCont = document.createElement("div");
		this.cardCont.className = 'card_container';

		this.cardFront = document.createElement("div");
		this.cardFront.className = 'card_front';

		this.cardBack = document.createElement("div");
		this.cardBack.className = 'card_back';

		this.buildCard = function (parentFrag) {
			var flipDiv = document.createElement("div"),
				frontValDiv = document.createElement("div"),
				backValDiv = document.createElement("div"),
				catDiv = document.createElement("div");
			flipDiv.className = 'flip';
			frontValDiv.className = 'front_val';
			backValDiv.className = 'back_val';
			catDiv.className = 'cat_val';

			//add data
			frontValDiv.innerHTML = this.data.q;
			backValDiv.innerHTML = this.data.a;
			catDiv.innerHTML = this.data.category;

			this.cardFront.appendChild(frontValDiv);
			this.cardFront.appendChild(catDiv);
			this.cardBack.appendChild(backValDiv);

			flipDiv.appendChild(this.cardFront);
			flipDiv.appendChild(this.cardBack);

			this.cardCont.id = this.id;
			this.cardCont.appendChild(flipDiv);

			//console.log(parentFrag);
			//console.log(abc);
			parentFrag.appendChild(this.cardCont);
		}
	}


	// 
	var DiscardPile = function () { }

	window.Game = Game;  // Now Game construction function available in window object.

})(window);
