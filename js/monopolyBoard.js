var canvas = document.getElementById('monopolyBoard');
var ctx = canvas.getContext('2d');

function draw() {
  
  ctx.scale(1.01, 1.01)

  
  // //board-border
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,962,962);
  
  // board-background
  ctx.fillStyle = "#c0e2ca";
  ctx.fillRect(1, 1, 960, 960);
  
  
  
  
  //left-line
  ctx.moveTo(121, 0);
  ctx.lineTo(121, 961);
  ctx.stroke();
  
  //left=property-color-bar
  ctx.fillStyle = "#ec8b2c";
  ctx.fillRect(91,121,30,160);
  ctx.fillRect(91,361,30,80);
   
  ctx.fillStyle = "#c53884";
  ctx.fillRect(91,521,30,160);
  ctx.fillRect(91,761,30,80);
  
  //left-property-borders
  ctx.moveTo(0, 201);
  ctx.lineTo(121, 201);
  ctx.stroke();
    
  ctx.moveTo(0, 281);
  ctx.lineTo(121, 281);
  ctx.stroke();
  
  ctx.moveTo(0, 361);
  ctx.lineTo(121, 361);
  ctx.stroke();

  ctx.moveTo(0, 441);
  ctx.lineTo(121, 441);
  ctx.stroke();
  
  ctx.moveTo(0, 521);
  ctx.lineTo(121,521);
  ctx.stroke();
  
  ctx.moveTo(0, 601);
  ctx.lineTo(121, 601);
  ctx.stroke();
  
  ctx.moveTo(0, 681);
  ctx.lineTo(121, 681);
  ctx.stroke();
  
  ctx.moveTo(0, 761);
  ctx.lineTo(121, 761);
  ctx.stroke();
  
  ctx.moveTo(35, 840);
  ctx.lineTo(35, 925);
  ctx.lineTo(120, 925);
  
  //left-inner-lines
  ctx.moveTo(91, 121);
  ctx.lineTo(91, 281);
  ctx.stroke
  
  ctx.moveTo(91, 361);
  ctx.lineTo(91, 441);
  ctx.stroke();
  
  ctx.moveTo(91, 521);
  ctx.lineTo(91, 681);
  ctx.stroke();
  
  ctx.moveTo(91, 761);
  ctx.lineTo(91, 841);
  ctx.stroke();
  
  //top-line
  ctx.moveTo(0, 121);
  ctx.lineTo(961, 121);
  ctx.stroke();
  
  //top-property-color-bar
  ctx.fillStyle = "#db2428";
  ctx.fillRect(121,91,80,30);
  ctx.fillRect(281,91,160,30);
   
  ctx.fillStyle = "#fff004";
  ctx.fillRect(521,91,160,30);
  ctx.fillRect(761,91,80,30);
  
  //top-property-borders
  ctx.moveTo(201, 0);
  ctx.lineTo(201, 121);
  ctx.stroke();
  
  ctx.moveTo(281, 0);
  ctx.lineTo(281, 121);
  ctx.stroke();
  
  ctx.moveTo(361, 0);
  ctx.lineTo(361, 121);
  ctx.stroke();
  
  ctx.moveTo(441, 0);
  ctx.lineTo(441, 121);
  ctx.stroke();
  
  ctx.moveTo(521, 0);
  ctx.lineTo(521, 121);
  ctx.stroke();
  
  ctx.moveTo(601, 0);
  ctx.lineTo(601, 121);
  ctx.stroke();
  
  ctx.moveTo(681, 0);
  ctx.lineTo(681, 121);
  ctx.stroke();
  
  ctx.moveTo(761, 0);
  ctx.lineTo(761, 121);
  ctx.stroke();
  
  //top-inner-line
  ctx.moveTo(121, 91);
  ctx.lineTo(201, 91);
  ctx.stroke();
  
  ctx.moveTo(281, 91);
  ctx.lineTo(441, 91);
  ctx.stroke();
  
  ctx.moveTo(521, 91);
  ctx.lineTo(681, 91);
  ctx.stroke();
  
  ctx.moveTo(761, 91);
  ctx.lineTo(841, 91);
  ctx.stroke();
  
  //right-line
  ctx.moveTo(841, 0);
  ctx.lineTo(841, 961);
  ctx.stroke();
  
  //left=property-color-bar
  ctx.fillStyle = "#13a857";
  ctx.fillRect(841,121,30,160);
  ctx.fillRect(841,361,30,80);
   
  ctx.fillStyle = "#0066a4";
  ctx.fillRect(841,601,30,80);
  ctx.fillRect(841,761,30,80);
  
  //right-inner-line
  ctx.moveTo(871, 121);
  ctx.lineTo(871, 281);
  ctx.stroke();
  
  ctx.moveTo(871, 361);
  ctx.lineTo(871, 441);
  ctx.stroke();
  
  ctx.moveTo(871, 601);
  ctx.lineTo(871, 681);
  ctx.stroke();
  
  ctx.moveTo(871, 761);
  ctx.lineTo(871, 841);
  ctx.stroke();
  
  //right-property-borders
  ctx.moveTo(841, 201);
  ctx.lineTo(961, 201);
  ctx.stroke();
  
  ctx.moveTo(841, 281);
  ctx.lineTo(961, 281);
  ctx.stroke();
  
  ctx.moveTo(841, 361);
  ctx.lineTo(961, 361);
  ctx.stroke();

  ctx.moveTo(841, 441);
  ctx.lineTo(961, 441);
  ctx.stroke();
  
  ctx.moveTo(841, 521);
  ctx.lineTo(961,521);
  ctx.stroke();
  
  ctx.moveTo(841, 601);
  ctx.lineTo(961, 601);
  ctx.stroke();
  
  ctx.moveTo(841, 681);
  ctx.lineTo(961, 681);
  ctx.stroke();
  
  ctx.moveTo(841, 761);
  ctx.lineTo(961, 761);
  ctx.stroke();
  
  //bottom-line
  ctx.moveTo(0, 841);
  ctx.lineTo(961, 841);
  ctx.stroke();
  
  //bottom-property-color-bar
  ctx.fillStyle = "#acdcf0";
  ctx.fillRect(121,841,160,30);
  ctx.fillRect(361,841,80,30);
   
  ctx.fillStyle = "#4b0082";
  ctx.fillRect(601,841,80,30);
  ctx.fillRect(761,841,80,30);;
  
  //bottom-inner-line
  ctx.moveTo(121, 871);
  ctx.lineTo(281, 871);
  ctx.stroke();
  
  ctx.moveTo(361, 871);
  ctx.lineTo(441, 871);
  ctx.stroke();
  
  ctx.moveTo(601, 871);
  ctx.lineTo(681, 871);
  ctx.stroke();
  
  ctx.moveTo(761, 871);
  ctx.lineTo(841, 871);
  ctx.stroke();
  
  //bottom-property-borders
  ctx.moveTo(201, 841);
  ctx.lineTo(201, 961);
  ctx.stroke();
  
  ctx.moveTo(281, 841);
  ctx.lineTo(281, 961);
  ctx.stroke();
  
  ctx.moveTo(361, 841);
  ctx.lineTo(361, 961);
  ctx.stroke();
  
  ctx.moveTo(441, 841);
  ctx.lineTo(441, 961);
  ctx.stroke();
  
  ctx.moveTo(521, 841);
  ctx.lineTo(521, 961);
  ctx.stroke();
  
  ctx.moveTo(601, 841);
  ctx.lineTo(601, 961);
  ctx.stroke();
  
  ctx.moveTo(681, 841);
  ctx.lineTo(681, 961);
  ctx.stroke();
  
  ctx.moveTo(761, 841);
  ctx.lineTo(761, 961);
  ctx.stroke();
  
  
}

function drawProperties(){
  ctx.fillStyle = "#000";
  
  // Light Blue & Indigo Properties Panel
  ctx.font = "12px Josefin Sans";
  ctx.fillText("VISITING", 46, 948);    

  ctx.font = "12px Josefin Sans";
  ctx.fillText("Connecticut", 128 ,886);
  ctx.fillText("Avenue", 140 , 900);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$120",147,955);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Vermont", 217 ,886);
  ctx.fillText("Avenue", 220 , 900);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$100",227,955);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Chance", 300, 867);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Oriental", 377 ,886);
  ctx.fillText("Avenue", 380 , 900);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$100",387,955);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Reading", 459, 862);
  ctx.fillText("Railroad", 458, 878);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$200",467,955);
  
  ctx.font = "14px Josefin Sans";
  ctx.fillText("INCOME", 531, 875);
  ctx.fillText("TAX", 547, 891);
  ctx.save();
  ctx.translate(595.5,  756);
  ctx.rotate(45 * Math.PI / 180);
  ctx.fillRect(75, 126, 5, 5);
  ctx.restore();
  ctx.font = "10px Josefin Sans";
  ctx.fillText("PAY 10%", 541, 923);
  ctx.fillText("OR", 552, 935);
  ctx.fillText("$200", 547, 947);
  
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Baltic", 625 ,886);
  ctx.fillText("Avenue", 620 , 900);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$60",629,955);
  
  ctx.font = "14px Josefin Sans";
  ctx.fillText("Community", 685, 862);
  ctx.fillText("Chest", 704, 878);
  ctx.font = "9px Josefin Sans";
  ctx.fillText("Follow Instructions",684,943);             
  ctx.fillText("On Card",705,955);
                 
  ctx.font = "12px Josefin Sans"
  ctx.fillText("Mediter-", 777 ,886);
  ctx.fillText("ranean", 781, 899);
  ctx.fillText("Avenue", 780 , 914);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$60",789,955);
  
  ctx.save();
  
  // Orange & Purple Properties Panel
  ctx.translate(105,  70);
  ctx.rotate(135 * Math.PI / 180);
  
  ctx.font = "16px Josefin Sans"
  ctx.fillText("FREE", 5,5);
  ctx.fillText("PARKING", -10, 75);  
  ctx.restore();
  ctx.save();
  
  ctx.translate(75,  126);
  ctx.rotate(90 * Math.PI / 180);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("New York", 11, 0);
  ctx.fillText("Avenue", 17, 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$200",24,70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Tennessee", 89 , 0);
  ctx.fillText("Avenue", 97 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$180",104, 70);
  
  ctx.font = "14px Josefin Sans";
  ctx.fillText("Community", 160, -29);
  ctx.fillText("Chest", 177, -13);
  ctx.font = "9px Josefin Sans";
  ctx.fillText("Follow Instructions",158,57);             
  ctx.fillText("On Card",178,69);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("St. James", 251 , 0);
  ctx.fillText("Place", 262 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$180",264, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Pennsylvania", 321, -27);
  ctx.fillText("Railroad", 335, -11);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$200",344,70);             
         
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Virginia", 415, 0);
  ctx.fillText("Avenue", 417 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$160", 424, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("States", 500, 0);
  ctx.fillText("Avenue", 497 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$180", 504, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Electric", 575, -25);
  ctx.fillText("Company", 569, -11);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$150", 584, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("St. Charles", 646, 0);
  ctx.fillText("Place", 663, 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$180", 664, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("JUST", 746, 62);
  
  ctx.restore();
  ctx.save();
  
  // Yellow & Red Properties Panel
  ctx.translate(900,  120);
  ctx.rotate(225 * Math.PI / 180);  
  ctx.font = "16px Josefin Sans";
  ctx.fillText("GO TO", 16, 10);
  ctx.fillText("JAIL", 25, 90);
  
  ctx.restore();
  
  ctx.translate(838,  75);
  ctx.rotate(180 * Math.PI / 180);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Marvin", 17, 0);
  ctx.fillText("Gardens", 13, 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$280",24,70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Water", 100, -27);
  ctx.fillText("Works", 100, -13);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$150", 104, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Ventor", 179 , 0);
  ctx.fillText("Avenue", 177 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$260",184, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Atlantic", 256 , 0);
  ctx.fillText("Avenue", 257 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$260",264, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("B. & O.", 338, -27);
  ctx.fillText("Railroad", 333, -13);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$200", 344, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Illinois", 421, 0);
  ctx.fillText("Avenue", 417, 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$240",424,70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Indiana", 496 , 0);
  ctx.fillText("Avenue", 497 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$220",504, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Chance", 576, -19);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Kentucky", 653 , 0);
  ctx.fillText("Avenue", 657 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$220",664, 70);
  
  ctx.restore();
  ctx.save();
  
  // Blue & Green Properties Panel
  ctx.translate(0,  -800);
  ctx.rotate(135 * Math.PI / 180);
  ctx.font= "10px Josefin Sans";
  ctx.fillText("COLLECT", 1,15);
  ctx.fillText("$200 SALARY", -9, 30);
  ctx.fillText("AS YOU PASS", -9, 45);
  
  ctx.restore();
  
  ctx.translate(-49,  -763);
  ctx.rotate(90 * Math.PI / 180);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Boardwalk", 8, 7);
  ctx.font = "12px Josefin Sans";
  ctx.fillText("$400",24,70);
  
  ctx.font = "14px Josefin Sans";
  ctx.fillText("LUXURY", 88, -14);
  ctx.fillText("TAX", 103, 0);
  ctx.font = "12px Josefin Sans";
  ctx.fillText("PAY $75", 95, 60);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Park", 184, 0);
  ctx.fillText("Place", 181, 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$350", 184, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Chance", 257, -19);
  
  ctx.fillText("Short", 341, -27);
  ctx.fillText("Line", 344, -13);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$200", 343, 70);
  
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Pennsylvania", 402, 0);
  ctx.fillText("Avenue", 417 , 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$320", 424, 70);
  
  ctx.font = "14px Josefin Sans";
  ctx.fillText("Community", 481, -29);
  ctx.fillText("Chest", 498, -13);
  ctx.font = "9px Josefin Sans";
  ctx.fillText("Follow Instructions", 479, 57);
  ctx.fillText("On Card", 499, 69);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("North", 580, 0);
  ctx.fillText("Carolina", 574, 15);
  ctx.fillText("Avenue", 577 , 30);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$300", 584, 70);
  
  ctx.font = "12px Josefin Sans";
  ctx.fillText("Pacific", 659, 0);
  ctx.fillText("Avenue", 657, 15);
  ctx.font = "11px Josefin Sans";
  ctx.fillText("$300", 664, 70);
  
  ctx.restore();
}

WebFont.load({
    google: {
      families: ['Josefin Sans', 'Open Sans']
    },
  active: function() {
    draw();
    drawProperties();
  }
  });

 