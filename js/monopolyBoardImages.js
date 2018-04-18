  var canvas = document.getElementById('monopolyBoardImages');
  var ctx2 = canvas.getContext('2d');
  
  var go = new Image();
  go.onload = function () {
  ctx2.drawImage(go, 843, 849);
  }
  go.src = "./images/board-images/go.png";

  var communityChest = new Image();
  communityChest.onload = function (){
    ctx2.drawImage(communityChest, 690, 883);
  }
  communityChest.src = "./images/board-images/community-chest.png";

  var railroad = new Image();
  railroad.onload = function () {
  ctx2.drawImage(railroad, 442, 863);
  }
  railroad.src = "./images/board-images/railroads.png";

  var pinkChance = new Image();
  pinkChance.onload = function () {
  ctx2.drawImage(pinkChance, 295, 873);
  }
  pinkChance.src = "./images/board-images/chance_pink.png";

  var inJail = new Image();
  inJail.onload = function () {
  ctx2.drawImage(inJail, 36.5, 842);
  }
  inJail.src = "./images/board-images/in-jail.png";

  var electricCompany = new Image();
  electricCompany.onload = function () {
  ctx2.drawImage(electricCompany, 15, 692);
  }
  electricCompany.src = "./images/board-images/electric-company.png";
  
  var railroadLeft = new Image();
  railroadLeft.onload = function () {
  ctx2.drawImage(railroadLeft, 0, 442);
  }
  railroadLeft.src = "./images/board-images/railroad-left.png";
  
  var communityChestLeft = new Image();
  communityChestLeft.onload = function (){
    ctx2.drawImage(communityChestLeft, 30, 290);
  }
  communityChestLeft.src = "./images/board-images/community-chest-left.png";

  var freeParking = new Image();
  freeParking.onload = function (){
    ctx2.drawImage(freeParking, 20, 20);
  }
  freeParking.src = "./images/board-images/free-parking.png";

  var chanceBlue = new Image();
  chanceBlue.onload = function (){
    ctx2.drawImage(chanceBlue, 215, 10);
  }
  chanceBlue.src = "./images/board-images/chance_blue.png";

  var railroadTop = new Image();
  railroadTop.onload = function () {
  ctx2.drawImage(railroadTop, 442, 0);
  }
  railroadTop.src = "./images/board-images/railroad-top.png";

  var waterWorks = new Image();
  waterWorks.onload = function () {
  ctx2.drawImage(waterWorks, 687, 15);
  }
  waterWorks.src = "./images/board-images/waterworks.png";

  var goToJail = new Image();
  goToJail.onload = function () {
  ctx2.drawImage(goToJail, 853, 13);
  }
  goToJail.src = "./images/board-images/go-to-jail.png";

  var communityChestRight = new Image();
  communityChestRight.onload = function (){
    ctx2.drawImage(communityChestRight, 883, 290);
  }
  communityChestRight.src = "./images/board-images/community-chest-right.png";

  var railroadRight = new Image();
  railroadRight.onload = function () {
  ctx2.drawImage(railroadRight, 861, 442);
  }
  railroadRight.src = "./images/board-images/railroad-right.png";

  var chanceRight = new Image();
  chanceRight.onload = function () {
  ctx2.drawImage(chanceRight, 873, 535);
  }
  chanceRight.src = "./images/board-images/chance_red.png";

  var luxuryTax = new Image();
  luxuryTax.onload = function () {
  ctx2.drawImage(luxuryTax, 878, 691);
  }
  luxuryTax.src = "./images/board-images/luxury-tax.png";