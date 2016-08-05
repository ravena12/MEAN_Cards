function Deck() {
	function Card(suit, type) {
		this.suit = suit;
		this.type = type;
		return this;
	};
	var self = this;
	this.cards = [];
	this.shuffle = function() {
		for ( var i = 0; i < this.cards.length; i++) {
			var temp = this.cards[i];
			var swapValue = Math.floor(Math.random() * 52);
			 this.cards[i] = this.cards[swapValue];
			 this.cards[swapValue] = temp;
		}
	};
	this.reset = function () {
		this.cards = [];
		var suits = ['diamond', 'heart', 'club', 'spade'];
		var type = [ 'A', '2','3','4','5','6','7','8','9','10','J','Q','K'];
		for ( var i = 0; i < suits.length; i++ ) {
			for ( var j = 0; j < type.length; j ++) {
				console.log(suits[i], type[j]);
				self.cards.push(new Card(suits[i], type[j]));
			}
		}
		console.log('i am in the reset', self.cards);
	}
	this.deal = function () { 
		console.log(self.cards);
		return this.cards.pop();
	}
}
function Player(name) {
		this.name = name;
		this.hand = [];
		this.takeCard = function(card) {
			this.hand.push(card);
			console.log(this.hand);
		};
		this.discard = function () {
			this.hand.pop();
		};
	}
var deck = new Deck();
deck.reset();
deck.shuffle();
var player = new Player('raven');
for (var i = 0; i < 5; i++) {
	player.takeCard(deck.deal());
};
player.discard();
console.log(deck.cards.length, deck.cards);




