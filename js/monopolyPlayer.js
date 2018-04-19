var canvas = document.getElementById('monopolyPlayer');
var ctx3 = canvas.getContext('2d');
var canvas = document.getElementById('monopolyDisplay');
var ctx4 = canvas.getContext('2d');
var yLevel = 910;
var numberOfDice = 2;
var diceArray = ["zero", "one", "two", "three", "four", "five", "six"];

//PLAYER OBJECT
function Player(nameArg, tokenArg){
  this.name = nameArg;
  this.token = tokenArg;
  this.money = 0;
  this.propertiesOwned = [];
  this.communityChestJailCard = false;
  this.chanceJailCard = false;
  this.inJail = false;
  this.passedGo = false;
  this.rollAgain = false;
  this.x = 880;
  this.y = yLevel;
  this.currentLocation;
  this.diceRoll = [];
  this.totalDiceRoll = 0;
  this.doublesRolled = false;
  this.consecutiveDoubles = 0;

  yLevel -= 35;
  this.init();
}

Player.prototype.init = function (){
  this.money = 1500;
  monopolyGame.bank -= 1500;

  // PLACE TOKEN ON THE BOARD
  this.drawToken(this.token);
}

//DICE FUNCTIONS
Player.prototype.rollDice = function(){
  this.diceRoll = [];
  for (x=1; x <= numberOfDice; x++){
    this.diceRoll.push(Math.ceil(Math.random() * 6));
  }
  this.totalDiceRoll = this.diceRoll[0] + this.diceRoll[1];
  
  setTimeout( function(){
    ctx4.clearRect(0, 0, 960, 960);
    that.displayDice()}, 500);

  
  return this.totalDiceRoll;
}

Player.prototype.isDoubles = function(diceArr){
  if (diceArr[0] === diceArr[1]){
    this.doublesRolled = true;
    this.consecutiveDoubles++
  } else {
    this.doublesRolled = false;
    this.consecutiveDoubles = 0
  }

  return this.doublesRolled;
}

Player.prototype.displayDice = function(){
  var diceOne = new Image();
  diceOne.onload = function () {
    var imageWidth = diceOne.width;
    var imageHeight = diceOne.width;
    ctx4.drawImage(diceOne, (canvas.width/2 - imageWidth - 50), (canvas.height/2) - (imageHeight/2))
  }
  diceOne.src = "./images/dice/" + diceArray[this.diceRoll[0]] + ".png";

  var diceTwo = new Image();
  diceTwo.onload = function () {
    var imageWidth2 = diceTwo.width;
    var imageHeight2 = diceTwo.width;
    ctx4.drawImage(diceTwo, (canvas.width/2 + 50), (canvas.height/2) - (imageHeight2/2))
  }
  diceTwo.src = "./images/dice/" + diceArray[this.diceRoll[1]] + ".png";
}

Player.prototype.drawToken = function(tokenArg){
  var xPosition = this.x;
  var yPosition = this.y;
  var moveToken = tokenArg;
  var playerToken = new Image();
  playerToken.onload = function () {
    ctx3.drawImage(playerToken, xPosition, yPosition);
  }
  playerToken.src = "./images/tokens/" + moveToken +".png";
  
}

Player.prototype.updateCanvas = function(){
  that = this;
  setTimeout( function(){
    ctx3.clearRect(0, 0, 960, 960);
    that.drawToken(that.token)}, 500);
}

Player.prototype.redrawOTherTokens = function(){
  for (i=0; i < gamePlayers.length; i++){
    if (gamePlayers[i].name != this.name){
      var redrawToken = gamePlayers[i].token;
      var redrawX = gamePlayers[i].x;
      var redrawY = gamePlayers[i].y;
      var playerToken = new Image();
      playerToken.onload = function () {
        ctx3.drawImage(playerToken, redrawX, redrawY);
      }
      playerToken.src = "./images/tokens/" + redrawToken +".png";
    }
  }
}

// MOVE FUNCTIONS
Player.prototype.move = function(){
  that = this;
  if (this.y > 841 && this.x >= 140){
    this.moveBottomRow();
  } else if (this.x < 120 && this.y >120){
    this.moveLeftColumn();
  } else if (this.x < 840 && this.y < 120){
    this.moveTopRow();
  } else {
    this.moveRightColumn();
  }
  this.updateCanvas();
  setTimeout( function(){
    ctx3.clearRect(0, 0, 960, 960);
    that.redrawOTherTokens()}, 500);
  this.currentLocation = this.findLocation(monopolyGame.boardGrid, this.x, this.y, "xMin", "xMax", "yMin", "yMax");
  this.checkLocationType();

  // IF PASSED GO, COLLECT $200
  if (this.passedGo === true){
    this.money += 200;
    this.passedGo = false;
  }
}

Player.prototype.moveBottomRow = function(){
  while (this.totalDiceRoll > 0){
    if (this.x > 840){      
      this.x -= 100;
      this.totalDiceRoll--;
    } else if(this.x === 140){
      this.x -= 140;
      this.totalDiceRoll--;
    }else if (this.x > 140 && this.x < 840){      
      this.x -= 80;
      this.totalDiceRoll--;
    } else {
      this.moveLeftColumn();
    }
  }
}

Player.prototype.moveLeftColumn = function(){
  while (this.totalDiceRoll > 0){
    if (this.y > 840) {
      this.y -= 115;
      this.x += 39;
      this.totalDiceRoll--;
    } else if(this.y < 171 && this.y > 120){
      this.y -= 110;
      this.totalDiceRoll--;
    } else if (this.y > 170 && this.y < 840){
      this.y -= 80;
      this.totalDiceRoll--;
    } else {
      this.moveTopRow();
    }
  }
}

Player.prototype.moveTopRow = function(){
  while (this.totalDiceRoll > 0){
    if (this.x < 120){
      this.x += 100;
      this.totalDiceRoll--;
    }else if (this.x === 779){
      this.x += 101;
      this.totalDiceRoll--;
    } else if (this.x > 120 && this.x < 779){
      this.x += 80;
      this.totalDiceRoll--;
    } else {
      this.moveRightColumn();
    }
  }
}

Player.prototype.moveRightColumn = function(){
  while (this.totalDiceRoll > 0){
    if (this.y < 120 || this.y === 800){
      if (this.y === 800){
        this.passedGo = true;
      }
        this.y += 115;
        this.totalDiceRoll--;
    } else if (this.y <800 && this.y > 120){
      this.y += 80;
      this.totalDiceRoll--;
    } else {
      this.moveTopRow();
    }
  }
}


Player.prototype.findLocation = function(gridArray, currentX, currentY, minX, maxX, minY, maxY){
  for (var i = 0; i < gridArray.length; i++) {
    if (gridArray[i][minX] <= currentX && currentX <= gridArray[i][maxX] && gridArray[i][minY] <= currentY && currentY <= gridArray[i][maxY]) {
    return gridArray[i].name;
    }
  }
}

// CHECK TYPE OF PROPERTY: STREET, RAILROAD, UTILTY, COMMUNITY CHEST, CHANCE , INCOME TAX, LUXURY TAX OR GO TO JAIL.
Player.prototype.checkLocationType = function(){
  for (var i = 0; i < monopolyGame.properties.length; i++) {
    if (monopolyGame.properties[i].name === this.currentLocation) {
      
    } else if (monopolyGame.properties[i].name === "Chance" || monopolyGame.properties[i].name === "Community Chest"){

    } else if (monopolyGame.properties[i].name === "Go To Jail"){

    } else if (monopolyGame.properties[i].name === "Income Tax"){

    } else if (monopolyGame.properties[i].name === "Luxury Tax"){
      this.money -= 75;
    }
  }


}

Player.prototype.buyProperty = function(propertyName, propertyCost){
  if (this.money - propertyCost >= 0){
    this.propertiesOwned.push(propertyName);
    this.money -= PropertyCost;
    return true;
  }

  return false;
}

Player.prototype.buyHouse = function(){

}

Player.prototype.sellHouse = function(){

}

Player.prototype.buyHotel = function(){

}

Player.prototype.sellHotel = function(){
  
}

Player.prototype.mortgageProperty = function(){

}

Player.prototype.unMortgageProperty = function(){

}