function MonopolyGame(){
  this.properties = [
    {name: "Mediterranean Avenue", type: "street", colorGroup: "indigo", cost: 60, rent: [2, 10, 30, 90, 160, 250], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 30, isMortgaged: false, isOwned:false},
    {name: "Baltic Avenue", type: "street", colorGroup: "indigo", cost: 60, rent: [4, 20, 60, 180, 320, 450], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 30, isMortgaged: false, isOwned:false},
    {name: "Oriental Avenue", type: "street", colorGroup: "lightBlue", cost: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 50, isMortgaged: false, isOwned:false},
    {name: "Vermont Avenue", type: "street", colorGroup: "lightBlue", cost: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50, housesOwned: 0, hotelsOwned: 0, mortgageValue: 50, isMortgaged: false, isOwned:false},
    {name: "Connecticut Avenue", type: "street", colorGroup: "lightBlue", cost: 120, rent: [8, 40, 100, 300, 450, 600], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 60, isMortgaged: false, isOwned:false},
    {name: "St. Charles Place", type: "street", colorGroup: "pink", cost: 140, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, hotelCost: 100, housesOwned:0, hotelsOwned: 0, mortgageValue: 70, isMortgaged: false, isOwned:false},
    {name: "States Avenue", type: "street", colorGroup: "pink", cost: 140, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, hotelCost: 100, housesOwned:0, hotelsOwned: 0, mortgageValue: 70, isMortgaged: false, isOwned:false},
    {name: "Virginia Avenue", type: "street", colorGroup: "pink", cost: 160, rent: [12, 60, 180, 500, 700, 900], houseCost: 100, hotelCost: 100, housesOwned:0, hotelsOwned: 0, mortgageValue: 80, isMortgaged: false, isOwned:false},
    {name: "St. James Place", type: "street", colorGroup: "orange", cost: 180, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, hotelCost: 100, housesOwned:0, hotelsOwned: 0, mortgageValue: 90, isMortgaged: false, isOwned:false},
    {name: "Tennessee Avenue", type: "street", colorGroup: "orange", cost: 180, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, hotelCost: 100, housesOwned:0, hotelsOwned: 0, mortgageValue: 90, isMortgaged: false, isOwned:false},
    {name: "New York Avenue", type: "street", colorGroup: "orange", cost: 200, rent: [16, 80, 220, 600, 800, 1000], houseCost: 100, hotelCost: 100, housesOwned:0, hotelsOwned: 0, mortgageValue: 100, isMortgaged: false, isOwned:false},
    {name: "Kentucky Avenue", type: "street", colorGroup: "red", cost: 220, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, hotelCost: 150, housesOwned:0, hotelsOwned: 0, mortgageValue: 110, isMortgaged: false, isOwned:false},
    {name: "Indiana Avenue", type: "street", colorGroup: "red", cost: 220, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, hotelCost: 150, housesOwned:0, hotelsOwned: 0, mortgageValue: 110, isMortgaged: false, isOwned:false},
    {name: "Illinois Avenue", type: "street", colorGroup: "red", cost: 240, rent: [20, 100, 300, 750, 925, 1100], houseCost: 150, hotelCost: 150, housesOwned:0, hotelsOwned: 0, mortgageValue: 110, isMortgaged: false, isOwned:false},
    {name: "Atlantic Avenue", type: "street", colorGroup: "yellow", cost: 260, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, hotelCost: 150, housesOwned:0, hotelsOwned: 0, mortgageValue: 130, isMortgaged: false, isOwned:false},
    {name: "Ventnor Avenue", type: "street", colorGroup: "yellow", cost: 260, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, hotelCost: 150, housesOwned:0, hotelsOwned: 0, mortgageValue: 130, isMortgaged: false, isOwned:false},
    {name: "Marvin Gardens", type: "street", colorGroup: "yellow", cost: 280, rent: [24, 120, 360, 850, 1025, 1200], houseCost: 150, hotelCost: 150, housesOwned:0, hotelsOwned: 0, mortgageValue: 140, isMortgaged: false, isOwned:false},
    {name: "Pacific Avenue", type: "street", colorGroup: "green", cost: 300, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, hotelCost: 200, housesOwned:0, hotelsOwned: 0, mortgageValue: 150, isMortgaged: false, isOwned:false},
    {name: "North Carolina Avenue", type: "street", colorGroup: "green", cost: 300, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, hotelCost: 200, housesOwned:0, hotelsOwned: 0, mortgageValue: 150, isMortgaged: false, isOwned:false},
    {name: "Pennsylvania Avenue", type: "street", colorGroup: "green", cost: 320, rent: [28, 150, 450, 1000, 1200, 1400], houseCost: 200, hotelCost: 200, housesOwned:0, hotelsOwned: 0, mortgageValue: 160, isMortgaged: false, isOwned:false},
    {name: "Park Place", type: "street", colorGroup: "blue", cost: 350, rent: [35, 175, 500, 1100, 1300, 1500], houseCost: 200, hotelCost: 200, housesOwned:0, hotelsOwned: 0, mortgageValue: 175, isMortgaged: false, isOwned:false},
    {name: "Boardwalk", type: "street", colorGroup: "blue", cost: 400, rent: [50, 200, 600, 1400, 1700, 2000], houseCost: 200, hotelCost: 200, housesOwned:0, hotelsOwned: 0, mortgageValue: 200, isMortgaged: false, isOwned:false},
    {name: "Reading Railroad", type: "railroad", colorGroup: "rr", cost: 200, rent: [25, 50,100,200], mortgageValue: 100, isMortgaged: false, isOwned:false},
    {name: "Pennsylvania Railroad", type: "railroad", colorGroup: "rr", cost: 200, rent: [25, 50,100,200], mortgageValue: 100, isMortgaged: false, isOwned:false},
    {name: "B. & O. Railroad", type: "railroad", colorGroup: "rr", cost: 200, rent: [25, 50,100,200], mortgageValue: 100, isMortgaged: false, isOwned:false},
    {name: "Short Line", type: "railroad", colorGroup: "rr", cost: 200, rent: [25, 50,100,200], mortgageValue: 100, isMortgaged: false, isOwned:false},
    {name: "Electric Company", type: "utility", colorGroup: "util", cost: 150, rent: [4, 10], mortgageValue: 75, isMortgaged: false, isOwned:false},
    {name: "Water Works", type: "utility", colorGroup: "util", cost: 150, rent: [4, 10], mortgageValue: 75, isMortgaged: false, isOwned:false}
  ]

  this.boardGrid = [
    {name: "Go", xMin: 841, xMax: 960, yMin: 841, yMax: 960}, 
    {name: "Mediterranean Avenue", xMin: 761, xMax: 840, yMin: 841, yMax: 960}, 
    {name: "Community Chest", xMin: 681, xMax: 760, yMin: 841, yMax: 960}, 
    {name: "Baltic Avenue", xMin: 601, xMax: 680, yMin: 841, yMax: 960}, 
    {name: "Income Tax", xMin: 521, xMax: 600, yMin: 841, yMax: 960}, 
    {name: "Reading Railroad", xMin: 441, xMax: 520, yMin: 841, yMax: 960}, 
    {name: "Oriental Avenue", xMin: 361, xMax: 440, yMin: 841, yMax: 960}, 
    {name: "Chance", xMin: 281, xMax: 360, yMin: 841, yMax: 960}, 
    {name: "Vermont Avenue", xMin: 201, xMax: 280, yMin: 841, yMax: 960}, 
    {name: "Connecticut Avenue", xMin: 121, xMax: 200, yMin: 841, yMax: 960}, 
    {name: "Just Visiting", xMin: 0, xMax: 120, yMin: 841, yMax: 960}, 
    {name: "St. Charles Place", xMin: 1, xMax: 120, yMin: 761, yMax: 840}, 
    {name: "Electric Company", xMin: 1, xMax: 120, yMin: 681, yMax: 760}, 
    {name: "States Avenue", xMin: 1, xMax: 120, yMin: 601, yMax: 680}, 
    {name: "Virginia Avenue", xMin: 1, xMax: 120, yMin: 521, yMax: 600}, 
    {name: "Pennsylvania Railroad", xMin: 1, xMax: 120, yMin: 441, yMax: 520}, 
    {name: "St. James Place", xMin: 1, xMax: 120, yMin: 361, yMax: 440}, 
    {name: "Community Chest", xMin: 1, xMax: 120, yMin: 281, yMax: 360}, 
    {name: "Tennessee Avenue", xMin: 1, xMax: 120, yMin: 201, yMax: 280},
    {name: "New York Avenue", xMin: 1, xMax: 120, yMin: 121, yMax: 200}, 
    {name: "Free Parking", xMin: 1, xMax: 120, yMin: 1, yMax: 120}, 
    {name: "Kentucky Avenue", xMin: 121, xMax: 200, yMin: 1, yMax: 120}, 
    {name: "Chance", xMin: 201, xMax: 280, yMin: 1, yMax:120}, 
    {name: "Indiana Avenue", xMin: 281, xMax: 360, yMin: 1, yMax: 120}, 
    {name: "Illinois Avenue", xMin: 361, xMax: 440, yMin: 1, yMax: 120}, 
    {name: "B. & O. Railroad", xMin: 441, xMax: 520, yMin: 1, yMax: 120}, 
    {name: "Atlantic Avenue", xMin: 521, xMax: 600, yMin: 1, yMax: 120}, 
    {name: "Ventnor Avenue", xMin: 601, xMax: 680, yMin: 1, yMax: 120}, 
    {name: "Water Works", xMin: 681, xMax: 760, yMin: 1, yMax: 120}, 
    {name: "Marvin Gardens", xMin: 761, xMax: 840, yMin: 1, yMax: 120}, 
    {name: "Go To Jail", xMin: 841, xMax: 960, yMin: 1, yMax: 120}, 
    {name: "Pacific Avenue", xMin: 841, xMax: 960, yMin: 121, yMax: 200}, 
    {name: "North Carolina Avenue", xMin: 841, xMax: 960, yMin: 201, yMax: 280}, 
    {name: "Community Chest", xMin: 841, xMax: 960, yMin: 281, yMax:360}, 
    {name: "Pennsylvania Avenue", xMin: 841, xMax: 960, yMin: 361, yMax: 440}, 
    {name: "Short Line", xMin: 841, xMax: 960, yMin: 441, yMax: 520}, 
    {name: "Chance", xMin: 841, xMax: 960, yMin: 521, yMax: 600}, 
    {name: "Park Place", xMin: 841, xMax: 960, yMin: 601, yMax: 680}, 
    {name: "Luxury Tax", xMin: 841, xMax: 960, yMin: 681, yMax: 760}, 
    {name: "Boardwalk", xMin: 841, xMax: 960, yMin: 761, yMax: 840}]

  this.bank = 15140;
  this.houses = 32;
  this.hotels = 12;
  this.tokenArray = ["dog", "car", "iron", "ship", "shoe", "thimble", "top-hat", "wheel-barrow"];
  this.gamePlayers = [];
  this.currentTurn = 0;

  // MonopolyGame.prototype.startGame = function(){
  //   var deleteNode = document.getElementById("instructions");
  //   deleteNode.parentNode.removeChild(deleteNode);
  //   var deleteNode = document.getElementById("play-game-button");
  //   deleteNode.parentNode.removeChild(deleteNode);
  //   this.deleteRulesNode();
  //   // this.addPlayerHeader();
  // }

  // MonopolyGame.prototype.deleteRulesNode = function(){
  //   var deleteNode = document.getElementById("instructions");
  //   deleteNode.parentNode.removeChild(deleteNode);
  //   var deleteNode = document.getElementById("play-game-button");
  //   deleteNode.parentNode.removeChild(deleteNode);
  // }
  
  // MonopolyGame.prototype.addPlayerHeader = function(){
  //   var headerHtml = "<div class = 'header'><h2>PLAYER INFO</h2></div>"
  //   // $('.player-info').append(headerHtml);
  // }

  
  
  // MonopolyGame.prototype.addPlayerStats = function(player){
  //   var playerstats = "<div class='" + player.name.split(" ").join("-") + "'>";
  //   playerstats += "<div class='player-header'>";
  //   playerstats += "<img src='images/tokens/" + player.token + ".png'>";
  //   playerstats += "<h2>" + player.name + "</h2>";
  //   playerstats += "<h2>$" + player.money + "</h2>";
  //   playerstats += "</div>";
  //   playerstats += "<div class='properties'>";
  //   playerstats += "</div>";
  //   playerstats += "</div>";

  //   $('.player-info').append(playerstats);
  // }

  // MonopolyGame.prototype.turn = function(){
  //   if (this.currentTurn === this.gamePlayers.length){
  //     this.currentTurn = 0
  //   }

  //   this.gamePlayers[this.currentTurn].rollDice();
  //   this.currentTurn++;
  // }

}

var monopolyGame = new MonopolyGame;
var player1;
var player2;
var rollBTN = document.getElementById("roll-dice-button");
rollBTN.style.display = "none";


function startGame(){
  player1 = new Player("Player 1", "car");
  monopolyGame.gamePlayers.push(player1);
  player2 = new Player("Player 2", "dog");
  monopolyGame.gamePlayers.push(player2);
  // var timeoutId = setTimeout(function () {
    deleteRulesNode();
    addPlayerHeader();
    
    
    rollBTN.style.visibility = "show";
  // }, 1000);
  // deleteRulesNode();
  // addPlayerHeader();
  // addRollButton();
 
  
}

 function deleteRulesNode(){
  var deleteNode = document.getElementById("instructions");
  deleteNode.parentNode.removeChild(deleteNode);
  var deleteNode = document.getElementById("play-game-button");
  deleteNode.parentNode.removeChild(deleteNode);
}

function addPlayerHeader(){
  var headerHtml = document.createElement("div");
  headerHtml.setAttribute("class", "header");
  var headerText = document.createElement("h2");
  headerText.innerHTML = "PLAYER INFO";
  headerHtml.appendChild(headerText);
  parent = document.getElementsByClassName("player-info");
  parent[0].append(headerHtml);
  addPlayerStats();
  // $('.player-info').append(headerHtml);
}



function addPlayerStats(){
  for (x=0; 0 < monopolyGame.gamePlayers.length; x++){
    var playerInventory = document.createElement("div");
    var tempName = monopolyGame.gamePlayers[x].name
    console.log(monopolyGame.gamePlayers[x].name);
    playerInventory.setAttribute("class", tempName)
    var playerHeader = document.createElement("div");
    playerHeader.setAttribute("class", "player-header");
    var playerImg = document.createElement("img");
    playerImg.setAttribute("src", "images/tokens/" + monopolyGame.gamePlayers[x].token + ".png");
    playerName = document.createElement("h2");
    playerName.innerHTML = monopolyGame.gamePlayers[x].name;
    var playerMoney = document.createElement("h2");
    playerMoney.setAttribute("id", monopolyGame.gamePlayers[x].name.split(" ").join("-"))
    playerMoney.innerHTML = "$" + monopolyGame.gamePlayers[x].money;
    var propertyDiv = document.createElement("div");
    propertyDiv.setAttribute("class", "properties");
    playerHeader.appendChild(playerImg);
    playerHeader.appendChild(playerName);
    playerHeader.appendChild(playerMoney);
    playerInventory.appendChild(playerHeader);
    playerInventory.appendChild(propertyDiv);
    parent = document.getElementsByClassName("player-info");
    parent[0].append(playerInventory);
  }
  
}

function addRollButton(){
  var rollBTN = document.getElementById("roll-dice-button");
  rollBTN.style.display = "inline"
  // var playerRollButton = document.createElement("button");
  // playerRollButton.setAttribute("class", "roll-dice");
  // playerRollButton.setAttribute("type", "button")
  // playerRollButton.setAttribute("id", "play-game-button")
  // playerRollButton.innerHTML = "ROLL DICE";
  // var addRollButton = document.getElementById("controls");
  // addRollButton.appendChild(playerRollButton);
}

var monopolyGame = new MonopolyGame;

// $("button").click(function(e){
//   if(this.innerHTML === "PLAY GAME"){
    // var player1 = new Player("Player 1", "car");
    // monopolyGame.gamePlayers.push(player1);
    // $( ".instructions" ).toggle();
    // monopolyGame.addPlayerHeader();
    // monopolyGame.addPlayerStats(player1);
    // var player2 = new Player("Player 2", "dog");
    // monopolyGame.gamePlayers.push(player2);
    // player1.rollDice();
    // monopolyGame.addPlayerStats(player2);
    // $( ".instructions" ).toggle();
    // $(".player-info").toggle();
    // $(this).html('ROLL DICE');
  // }
  
  // if (this.innerHTML === "ROLL DICE"){
  //   monopolyGame.turn();
  // }
// });

// player2.propertiesOwned.push("Vermont Avenue");
// player1.rollDice();
// player1.move();
window.onload = function(){
  var playGameButton = document.getElementById('play-game-button');
  // var player1 = new Player("Player 1", "car");
  // monopolyGame.gamePlayers.push(player1);
  // var player2 = new Player("Player 2", "dog");
  // monopolyGame.gamePlayers.push(player2);

  playGameButton.onclick = startGame;
};