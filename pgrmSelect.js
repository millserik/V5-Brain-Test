function pgrmSelect(){
  let x = mouseX;
  let y = mouseY;


    
  for (let i = 0; i < 2; i++){
    for (let j = 0; j < 4; j++){
        if (x > j*120 && x < (j+1)*120 && y > (i*120 + 32) && y < (i+1)*120 +32){
          
        grid[i][j] = 50;

        grid[0][4] = pgrms[i][j];
            }
    }
  }
  
  return grid;

  
}