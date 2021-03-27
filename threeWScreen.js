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
  
  //add display elements specific to sensor
 
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
  
  if (sens == 'Potentiometer'){
        let angle1 = sens3Summary[2];
        while(angle1 < 145){
          angle1 = angle1 + 360;
        }
        text('Angle:',140,115);
        text((angle1-145) + ' Degrees',200,115);
    let analog = floor(map((angle1-145),0,250,0,4095));
    let analogPercent = floor(map((angle1-145),0,250,0,100));
        text(analog + '  (' + analogPercent +'%)',240,78);
    
  //box around dial
    rectMode(CORNER);
    noFill();
    strokeWeight(1);
    stroke(255,50);
    rect(120,92,240,180);
    noStroke();
    
    push();
    rectMode(CENTER);
    fill(125);
    stroke(255);
    translate(240,212);
    rotate(angle1);
    rect(0,0,50,50);
    pop();
    
    //create dial arc
    angleMode(DEGREES);
    noFill();
    stroke(255);
    strokeWeight(3);
    arc(240,212,100,100,145,35);
    noStroke();
    
    //movable dial
    stroke(255);
    //fill(0,176,240);
    if (sens3Summary[1] == 0){
      fill(0,176,240,120);
    } else {
      fill(0,176,240);
    }
    ellipse(240+50*cos(angle1),212+50*sin(angle1),20);
    noStroke();
    
  }
  
  sens3Summary[0] = sens;
  
  return sens3Summary;

}