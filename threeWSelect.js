function threeWSelect(){
  let x = mouseX;
  let y = mouseY;

  //check if sensor was clicked
  if (x > 0 && x <120 && y > 32 && y < 152){
    tapTrack3 = tapTrack3 + 1;
    grid[1][4] = tapTrack3;
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
  
  return grid;
}