var Properties = [
  {name: "Mediterranean Avenue", type: "street", colorGroup: "indigo", cost: 60, rent: [2, 10, 30, 90, 160, 250], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 30, isMortgaged: false, isOwned:false},
  {name: "Baltic Avenue", type: "street", colorGroup: "indigo", cost: 60, rent: [4, 20, 60, 180, 320, 450], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 30, isMortgaged: false, isOwned:false},
  {name: "Oriental Avenue", type: "street", colorGroup: "lightBlue", cost: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50, housesOwned:0, hotelsOwned: 0, mortgageValue: 50, isMortgaged: false, isOwned:false},
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

var bank = 15140;
var houses = 32;
var hotels = 12;


//DICE VARIABLES
var numberOfDice = 2;
var diceRoll = [];
var doublesRolled = false;

//DICE FUNCTIONS
function roll(){
  for (x=1; x <= numberOfDice; x++){
    diceRoll.push(Math.ceil(Math.random() * 6));
  }

  return diceRoll[0] + diceRoll[1];
}

function isDoubles(diceArr){
  if (diceRoll[0] === diceRoll[1]){
    doublesRolled = true;
  } else {
    doublesRolled = false;
  }

  return doublesRolled;
}