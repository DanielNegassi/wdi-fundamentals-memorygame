var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkFormatch = function () { 
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}} 
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
if ( cardsInPlay.length === 2 && cardOne === cardTwo )
	{ alert("Match found!"); } 
else if(cardsInPlay.length === 2 && cardOne !== cardTwo) 
	{ alert("Sorry, try again!");
flipCard(0);
flipCard(2);