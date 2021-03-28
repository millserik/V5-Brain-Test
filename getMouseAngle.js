function getMouseAngle(){
  angleMode(DEGREES);
    let x = mouseX;
    let y = mouseY;
  
  // angle = grid[1][5];
  // if (sens3Summary[0] == 'Potentiometer'){
  //   if (dist(x,y,(240+50*cos(angle)),(212+50*sin(angle))) < 10){
  //     sens3Summary[1] = 0;
  //   }
  // }
  

  

  let cx = 240;
  let cy = 212;
  
  dx = x - cx;
  dy = y - cy;
  
  angleM = floor(atan(dy/dx));
  
  if (dx < 0){
    angleM = angleM + 180;
  }
  
  if (angleM >= 90 && angleM < 145) {
      angleM = 145;
  }
  if (angleM > 35 && angleM < 90) {
      angleM = 35;
  }
  
  grid[1][5] = angleM;

  
  return grid;
  
}

