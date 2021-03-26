function deviceSelect(){
  let x = mouseX;
  let y = mouseY;


    
  for (let i = 0; i < 4; i++){
    for (let j = 0; j < 7; j++){
        if (x > j*68+2 && x < (j+1)*68+2 && y > (i*60 + 32) && y < (i+1)*60 +32){
          
        devGrid[i][j] = 50;

        devGrid[0][8] = devcs[i][j];
            }
    }
  }
  
  return devGrid;


}