function deviceScreen(){
  background(0);
  fill(125);
  rectMode(CORNER);
  rect(0,0,480,32);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text('Device Info',10,23);
  
//icons for the top row
  let icons = [];
  icons = [ctrlDim, ctrlDim, brain, battery, threeWire, backB];


  
  textAlign(CENTER);
  textSize(16);
  imageMode(CENTER);
  
  for (let i = 0; i < 1; i++){
    
    for (let j = 0; j < 6; j++){
      fill(devGrid[i][j]);
      rectMode(CORNER);
      rect(j*68+6,i*60+32,60,68);
      image(icons[j],j*68+36,i*60+62,55,45);
    }
    
  }
  let counter = 1;
    for (let i = 1; i < 4; i++){
    for (let j = 0; j < 7; j++){
      
      fill(devGrid[i][j]);
      //fill(0); 
      //rectMode(CORNER);
      rect(j*68+6,i*60+32,60,68);
      
      rectMode(CENTER);
      strokeWeight(3);
      stroke(125);
      noFill();
      rect(j*68+36,i*60+62,30,30);
      noStroke();
      rectMode(CORNER);
      
      fill(125);
      text(counter,j*68+36,i*60+68);
      
      counter = counter + 1;
    }
  }
}