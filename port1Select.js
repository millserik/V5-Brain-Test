function port1Select(){
  let x = mouseX;
  let y = mouseY;


    
  for (let i = 0; i < 2; i++){
    for (let j = 0; j < 4; j++){
        if (x > j*120 && x < (j+1)*120 && y > (i*120 + 32) && y < (i+1)*120 +32){
          
        grid[i][j] = 50;

        grid[0][4] = pt1[i][j];
          
          if (x > 0 && x <120 && y > 32 && y < 152){
            tapTrackP1 = tapTrackP1 + 1;
            grid[0][5] = tapTrackP1;
          }
            }
    }
  }
  
  return grid;

  
}