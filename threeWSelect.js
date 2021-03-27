function threeWSelect(){
  let x = mouseX;
  let y = mouseY;


    
  for (let i = 0; i < 2; i++){
    for (let j = 0; j < 4; j++){
        if (x > j*120 && x < (j+1)*120 && y > (i*120 + 32) && y < (i+1)*120 +32){
          
        grid[i][j] = 50;  //fills the grid clicked

        grid[0][4] = thwr[i][j]; //assign tag based on grid clicked
          
          if (x > 0 && x <120 && y > 32 && y < 152){
            tapTrack3 = tapTrack3 + 1;
            grid[1][4] = tapTrack3;
          }
            }
    }
  }
  
  return grid;

  
}