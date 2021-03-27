function threeWScreen(){
  //create background and menu bar
  rectMode(CORNER);
  background(0);
  fill(125);
  rect(0,0,480,32);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text('3-Wire Ports',10,23);
  
  
//information for available sensors
    let sensorIcon = [threeWire, bumper, potent,linetr]; //options to cycle through
    let sensorLabel = ['No Sensor', 'Bumper Switch','Potentiometer','Line Tracker'];
    let sensorType = [' ', 'Digital Input','Analog Input','Analog Input'];
    tapTrack3 = grid[1][4]; //counter to track how many times icon is clicked
  let digital = ['Low (0)','High (1)'];
  let buttonState = ['Pressed','Unpressed']
  

  textAlign(CENTER);
  textSize(14);
  imageMode(CENTER);
  
  //create sensor square
  grid[0][0] = 25;
  fill(grid[0][0]);
  rect(0,32,120,120);
  fill(255);
  text(sensorLabel[(tapTrack3 % sensorLabel.length)],64,142);
  image(sensorIcon[(tapTrack3 % sensorIcon.length)],60,85,95,70);
  let sens = sensorLabel[(tapTrack3 % sensorLabel.length)];
  
  //create back button
  fill(grid[1][3]);
  rect(420,212,60,60);
  image(backB,450,242,45,40);
  
  
  //create VEX brain actual box display
  noFill();
  strokeWeight(1);
  stroke(255,50);
  rect(120,32,240,60);
  noStroke();
  
  image(threeWire,150,62,45,40);
  textAlign(LEFT);
  textSize(16);
  fill(255);
  text(sensorType[(tapTrack3 % sensorLabel.length)],180,55);
 
  if (sens == 'Bumper Switch'){
    text(digital[sens3Summary[1]],240,78); 
    text('State:',140,115);
    text(buttonState[sens3Summary[1]],200,115);
    
    //create a bumper switch on screen
    stroke(255);
    strokeWeight(3);
    if (sens3Summary[1] == 0){
      fill(255,0,0,120);
    } else {
      fill(255,0,0);
    }
    rectMode(CENTER);
    rect(240,182,90,90,20);
    noFill();
    rect(240,182,60,60,15);
    noStroke();
    
  //box around button
    rectMode(CORNER);
    noFill();
    strokeWeight(1);
    stroke(255,50);
    rect(120,92,240,180);
    noStroke();
    
  }
  
  sens3Summary[0] = sens;
  
  return sens3Summary;

}