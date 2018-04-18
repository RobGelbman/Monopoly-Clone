var canvas = document.getElementById('monopolyPlayer');
var ctx3 = canvas.getContext('2d');

var gamePlayers = [];
var currentTurn = 0;

var monopolyGame = new MonopolyGame;
var player1 = new Player("Player 1", "car");
gamePlayers.push(player1);
var player2 = new Player("Player 2", "dog");
gamePlayers.push(player2);
player1.rollDice();
player2.rollDice();

console.log(gamePlayers, "   ", player1.diceRoll);