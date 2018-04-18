var canvas = document.getElementById('monopolyPlayer');
var ctx3 = canvas.getContext('2d');
var yLevel = 910;
var numberOfDice = 2;

//PLAYER OBJECT
function Player(nameArg, tokenArg){
  this.name = nameArg;
  this.token = tokenArg;
  this.money = 0;
  this.propertiesOwned = [];
  this.communityChestJailCard = false;
  this.chanceJailCard = false;
  this.inJail = false;
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
  for (x=1; x <= numberOfDice; x++){
    this.diceRoll.push(Math.ceil(Math.random() * 6));
  }
  this.totalDiceRoll = this.diceRoll[0] + this.diceRoll[1];
  this.move();
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
  if (this.y > 841 && this.x > 140){
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
  console.log(this.currentLocation)
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
      this.x += 40;
      this.totalDiceRoll--;
    } else if(this.y < 171 && this.y > 120){
      this.y -= 100;
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
    if (this.x < 120 || this.x === 780){
      this.x += 100;
      this.totalDiceRoll--;
    } else if (this.x > 120 && this.x < 780){
      this.x += 80;
      this.totalDiceRoll--;
    } else {
      this.moveRightColumn();
    }
  }
}

Player.prototype.moveRightColumn = function(){
  while (this.totalDiceRoll > 0){
    if (this.y < 120 || this.y === 780){
      this.y += 100;
      this.totalDiceRoll--;
    } else if (this.y <780 && this.y > 120){
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