var yLevel = 910;

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
  this.currentLocation = [this.x, this.y];

  yLevel -= 45;
  this.init();
}

Player.prototype.init = function (){
  this.money = 1500;
  monopolyGame.bank -= 1500;
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