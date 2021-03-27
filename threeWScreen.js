function threeWScreen(){
  background(0);
  fill(125);
  rect(0,0,480,32);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text('3-Wire Ports',10,23);
  
    let sensorIcon = [threeWire, bumper, potent,linetr];  //options to cycle through
    let sensorLabel = ['No Sensor', 'Bumper Switch','Potentiometer','Line Tracker'];
    let sensorType = [' ', 'Digital Input','Analog Input','Analog Input'];
    tapTrack3 = grid[1][4]; //counter to track how many times icon is clicked
  
    let icons = [];
  icons = [
    [sensorIcon[(tapTrack3 % sensorIcon.length)], slotb, slotb, slotb],
    [slotb, slotb, slotb, backB]
  ];
  
  let labels = [];
    labels = [
    [sensorLabel[(tapTrack3 % sensorLabel.length)],sensorType[(tapTrack3 % sensorType.length)],' ',' '],
    [' ',' ',' ','Back']
  ];
  
  textAlign(CENTER);
  textSize(14);
  imageMode(CENTER);
  grid[0][0] = 25;
  
  for (let i = 0; i < 2; i++){
    for (let j = 0; j < 4; j++){
      fill(grid[i][j]);
      rect(j*120,i*120+32,120,120);
      image(icons[i][j],j*120+60,i*120+87,95,70);
      fill(255);
      text(labels[i][j],j*120+64,i*120+142);
    }
  }
}