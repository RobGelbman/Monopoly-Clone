var canvas = document.getElementById('monopolyPlayer');
var ctx3 = canvas.getContext('2d');
var canvas = document.getElementById('monopolyDisplay');
var ctx4 = canvas.getContext('2d');
var yLevel = 910;
var numberOfDice = 2;
var diceArray = ["zero", "one", "two", "three", "four", "five", "six"];
var map = [
  [{x:880, y:910}, {x:780, y:910}, {x:700, y:910}, {x:620, y:910}, {x:540, y:910}, {x:460, y:910}, {x:380, y:910}, {x:300, y:910}, {x:220, y:910}, {x:140, y:910},
  {x:0, y:910}, {x:39, y:796}, {x:39, y:716}, {x:39, y:636}, {x:39, y:556}, {x:39, y:476}, {x:39, y:396}, {x:39, y:316}, {x:39, y:236}, {x:39, y:156}, 
  {x:39, y:46}, {x:139, y:46}, {x:219, y:46}, {x:299, y:46}, {x:379, y:46}, {x:459, y:46}, {x:539, y:46}, {x:619, y:46}, {x:699, y:46}, {x:779, y:46},
  {x:880, y:46}, {x:880, y:161}, {x:880, y:241}, {x:880, y:321}, {x:880, y:401}, {x:880, y:481}, {x:880, y:561}, {x:880, y:641}, {x:880, y:721}, {x:880, y:801}],
  [{x:880, y:875}, {x:780, y:875}, {x:700, y:875}, {x:620, y:875}, {x:540, y:875}, {x:460, y:875}, {x:380, y:875}, {x:300, y:875}, {x:220, y:875}, {x:140, y:875},
    {x:0, y:875}, {x:39, y:761}, {x:39, y:681}, {x:39, y:601}, {x:39, y:521}, {x:39, y:441}, {x:39, y:361}, {x:39, y:281}, {x:39, y:201}, {x:39, y:121}, 
    {x:39, y:11}, {x:139, y:11}, {x:219, y:11}, {x:299, y:11}, {x:379, y:11}, {x:459, y:11}, {x:539, y:11}, {x:619, y:11}, {x:699, y:11}, {x:779, y:11},
    {x:880, y:11}, {x:880, y:126}, {x:880, y:206}, {x:880, y:286}, {x:880, y:366}, {x:880, y:446}, {x:880, y:526}, {x:880, y:606}, {x:880, y:686}, {x:880, y:786}]
]

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
  this.mapLocation = 0;
  this.currentLocation;
  this.currentPropertyIndex = -1;
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
  that = this;
  this.diceRoll = [];
  for (x=1; x <= numberOfDice; x++){
    this.diceRoll.push(Math.ceil(Math.random() * 6));
  }
  this.totalDiceRoll = this.diceRoll[0] + this.diceRoll[1];
  
  setTimeout( function(){
    ctx4.clearRect(0, 0, 960, 960);
    that.displayDice()}, 500);

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
  for (i=0; i < monopolyGame.gamePlayers.length; i++){
    if (monopolyGame.gamePlayers[i].name != this.name){
      var redrawToken = monopolyGame.gamePlayers[i].token;
      var redrawX = monopolyGame.gamePlayers[i].x;
      var redrawY = monopolyGame.gamePlayers[i].y;
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
  this.mapLocation += this.totalDiceRoll;
  if (this.mapLocation > 39){
    that.mapLocation -= 39;
    this.passedGo = true;
  }
  this.x = map[1][this.mapLocation].x;
  this.y = map[1][this.mapLocation].y;
  // if (this.y > 841 && this.x >= 140){
  //   this.moveBottomRow();
  // } else if (this.x < 120 && this.y >120){
  //   this.moveLeftColumn();
  // } else if (this.x < 840 && this.y < 120){
  //   this.moveTopRow();
  // } else {
  //   this.moveRightColumn();
  // }
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
    var goMoney = document.getElementById(this.name.split(" ").join("-"))
    goMoney.innerHTML = this.money;
  }
}

// Player.prototype.moveBottomRow = function(){
//   for(i=0; i < this.totalDiceRoll; this.totalDiceRoll--){
//     if (this.x > 840){      
//       this.x -= 100;
//       // this.totalDiceRoll--;
//     } else if(this.x === 140){
//       this.x -= 140;
//       // this.totalDiceRoll--;
//     }else if (this.x > 140 && this.x < 840){      
//       this.x -= 80;
//       // this.totalDiceRoll--;
//     } else {
//       this.moveLeftColumn();
//     }
    
//   }
// }

// Player.prototype.moveLeftColumn = function(){
//   for(i=0; i < this.totalDiceRoll; this.totalDiceRoll--){
//     if (this.y > 840) {
//       this.y -= 114;
//       this.x += 39;
//       // this.totalDiceRoll--;
//     } else if(this.y < 171 && this.y > 120){
//       this.y -= 110;
//       // this.totalDiceRoll--;
//     } else if (this.y > 170 && this.y < 840){
//       this.y -= 80;
//       // this.totalDiceRoll--;
//     } else {
//       this.moveTopRow();
//     }
    
//   }
// }

// Player.prototype.moveTopRow = function(){
//   for(i=0; i < this.totalDiceRoll; this.totalDiceRoll--){
//     if (this.x < 120){
//       this.x += 100;
//       // this.totalDiceRoll--;
//     }else if (this.x === 779){
//       this.x += 101;
//       // this.totalDiceRoll--;
//     } else if (this.x > 120 && this.x < 779){
//       this.x += 80;
//       // this.totalDiceRoll--;
//     } else {
//       this.moveRightColumn();
//     }
    
//   }
// }

// Player.prototype.moveRightColumn = function(){
//   for(i=0; i < this.totalDiceRoll; this.totalDiceRoll--){
//     if (this.y < 120 || this.y === 800){
//       if (this.y === 800){
//         this.passedGo = true;
//       }
//         this.y += 115;
//         // this.totalDiceRoll--;
//     } else if (this.y <800 && this.y > 120){
//       this.y += 80;
//       // this.totalDiceRoll--;
//     } else {
//       this.moveTopRow();
//     }
//   }
// }


Player.prototype.findLocation = function(gridArray, currentX, currentY, minX, maxX, minY, maxY){
  for (var i = 0; i < gridArray.length; i++) {
    if (gridArray[i][minX] <= currentX && currentX <= gridArray[i][maxX] && gridArray[i][minY] <= currentY && currentY <= gridArray[i][maxY]) {
    return gridArray[i].name;
    }
  }
}

// CHECK TYPE OF PROPERTY: STREET, RAILROAD, UTILTY, COMMUNITY CHEST, CHANCE , INCOME TAX, LUXURY TAX OR GO TO JAIL.
Player.prototype.checkLocationType = function(){
  // var tempLocation = this.currentLocation;
  for (var i = 0; i < monopolyGame.properties.length; i++) {
    
    if (this.currentLocation === monopolyGame.properties[i].name) {
      
      this.currentPropertyIndex = i;
      this.propertyStatus();
    }
  }

  if (this.currentLocation === "Chance" || this.currentLocation === "Community Chest"){
      // CALL CARD FUNCTION
  } else if (this.currentLocation === "Go To Jail" ){
    // CALL GO TO JAIL FUNCTION
  } else if (this.currentLocation === "Income Tax"){
    // CALL INCOME TAX FUNCTION
  } else if (this.currentLocation === "Luxury Tax"){
    this.money -= 75;
  }
}

Player.prototype.propertyStatus = function(){
  if (monopolyGame.properties[this.currentPropertyIndex].isOwned && !(this.propertiesOwned.includes(monopolyGame.properties[this.currentPropertyIndex].name))){
    if (!(monopolyGame.properties[this.currentPropertyIndex].isMortgaged)){
      //CALL PAY RENT FUNCTION
      this.calculateRent(monopolyGame.properties[this.currentPropertyIndex].name, monopolyGame.properties[this.currentPropertyIndex].rent, monopolyGame.properties[this.currentPropertyIndex].housesOwned, monopolyGame.properties[this.currentPropertyIndex].hotelsOwned);
    }
  } else if (!(monopolyGame.properties[this.currentPropertyIndex].isOwned)){
    // BUY PROPERTY FUNCTION
    
    if(this.canAfford(monopolyGame.properties[this.currentPropertyIndex].cost)){
      this.buyProperty(monopolyGame.properties[this.currentPropertyIndex].name, monopolyGame.properties[this.currentPropertyIndex].cost )
    }
  }
}

Player.prototype.canAfford = function(itemCost){
  if (this.money - itemCost >= 0){
    return true;
  }

  return false;
}

Player.prototype.buyProperty = function(propertyName, propertyCost){
    console.log(this.name)  
    this.propertiesOwned.push(propertyName);
    this.money -= propertyCost;
    monopolyGame.properties[this.currentPropertyIndex].isOwned = true;
    var newTotal = document.getElementById(this.name.split(" ").join("-"));
    newTotal.innerHTML = "$"+ this.money;

}

Player.prototype.calculateRent = function(propertyNameArg, rentArray, housesArg, hotelArg){
  var owner;
  var totalRent = 0;
  
  for(i=0; i < monopolyGame.gamePlayers.length; i++){
    if(monopolyGame.gamePlayers[i].propertiesOwned.includes(propertyNameArg)){
      ownerIndex = i;
    }
  }

  if (hotelArg === 1){
    totalRent = rentArray[5];
  } else {
    totalRent = rentArray[housesArg];
  }

  if (this.canAfford(totalRent)){
    this.payRent(ownerIndex, totalRent);
  }
}

Player.prototype.payRent = function(ownerIndex, totalRent){
  // console.log(ownerIndex, totalRent);
  monopolyGame.gamePlayers[ownerIndex].money += totalRent;
  this.money -= totalRent;
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