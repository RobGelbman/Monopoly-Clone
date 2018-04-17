var canvas = document.getElementById('monopolyPlayer');
var ctx3 = canvas.getContext('2d');

var monopolyGame = new MonopolyGame;
var player1 = new Player("Player 1", "car");
this.monopolyGame.gamePlayers.push(player1);
var player2 = new Player("Player 2", "dog");
this.monopolyGame.gamePlayers.push(player2);
console.log(this.monopolyGame.gamePlayers);




// function moveToken(){
//   for (var i = 0; i < playerToken.length; i++) {
//     if (playerToken[i][name] === this.) {
//         return array[i];
//     }
// }
//   if ()

// }
  
  var playerToken = [{name:"dog", x: 880, y: 865}, {name: "car", x:880, y:910}];
  var token1 = new Image();
  token1.onload = function () {
    ctx3.drawImage(token1, playerToken[0].x, playerToken[0].y);
  }
  token1.src = "./images/tokens/" + playerToken[0].name +".png";

  var token2 = new Image();
  token2.onload = function () {
    ctx3.drawImage(token2, playerToken[1].x, playerToken[1].y);
  }
  token2.src = "./images/tokens/" + playerToken[1].name +".png";
