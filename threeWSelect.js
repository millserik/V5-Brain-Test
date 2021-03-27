function threeWSelect(){
  let x = mouseX;
  let y = mouseY;
  angleMode(DEGREES);

  
  //check if sensor was clicked
  if (x > 0 && x <120 && y > 32 && y < 152){
    tapTrack3 = tapTrack3 + 1;
    grid[1][4] = tapTrack3;
    
    if (tapTrack3 % 4 == 2){ //should definitely change this
      grid[1][5] = 145;
    }
  }
  
  //check if back button was clicked
  if (x > 420 && x < 480 && y > 212 && y < 272){
    grid[0][4] = d;
    grid[1][3] = 50;
  }else{
    grid[0][4] = 'threeW';
  }
  

// actions for bumper switch screen
  if (sens3Summary[0] == 'Bumper Switch'){
    if (x > 195 && x < 285 && y > 137 && y < 227){
      sens3Summary[1] = 0;
    }
  }
  
//actions for potentiometer screen
  angle = grid[1][5];
  if (sens3Summary[0] == 'Potentiometer'){
    if (dist(x,y,(240+50*cos(angle)),(212+50*sin(angle))) < 10){
      
      sens3Summary[1] = 0;
      
    }
  }
  
  grid[1][6] = sens3Summary[1];
  
  return grid;
}