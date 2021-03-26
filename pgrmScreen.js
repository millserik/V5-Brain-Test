function pgrmScreen(){
  background(0);
  fill(125);
  rect(0,0,480,32);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text('User Folder',10,23);
  
  let icons = [];
  icons = [
    [slotb, slotb, slotb, slotb],
    [slotb, slotb, slotb, backB]
  ];
  
  let labels = [];
    labels = [
    [' ',' ',' ',' '],
    [' ',' ',' ','Back']
  ];
  
  textAlign(CENTER);
  textSize(14);
  imageMode(CENTER);
  
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