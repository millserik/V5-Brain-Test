function preload(){
  controller = loadImage('gridIcons/controller.png');
  brain = loadImage('gridIcons/brain.png');
  wrench = loadImage('gridIcons/wrench.png');
  folder = loadImage('gridIcons/folder.png');
  slot1 = loadImage('gridIcons/slot1.png');
  slot2 = loadImage('gridIcons/slot2.png');
  slot3 = loadImage('gridIcons/slot3.png');
  slotb = loadImage('gridIcons/slotb.png');
  backB = loadImage('gridIcons/backButton.png');
  ctrlDim = loadImage('gridIcons/ctrlDim.png');
  battery = loadImage('gridIcons/battery.png');
  threeWire = loadImage('gridIcons/threeWire.png');
  bumper = loadImage('gridIcons/bumpSwitch.png');
  potent = loadImage('gridIcons/potentiometer.png');
  linetr = loadImage('gridIcons/lineTracker.png');
  smartPt = loadImage('gridIcons/smartPort.png');
  lightSen = loadImage('gridIcons/lightSensor.png');
}
// 2x4 grid background and tag pass[0][4]
  let grid = [];
  grid = [
    [0,0,0,0,'home',0,0],
    [0,0,0,0,0,0,0]
  ];
  let tag = grid[0][4];

// 4x7 grid background and tag pass[0][8]
let devGrid = [
  [0,0,0,0,0,0,0,'Devices'],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];
  
//home tags
let tags = [
    //['Drive','Devices','Settings','VEX'],
    ['Drive','Devices','home','home'],
    ['home','home','home','User']
  ];

//programs tags
let pgrms = [
  ['User','User','User','User'],
  ['User','User','User','home']
];

//drive tags
let drvs = [
  ['Drive','Drive','Drive','Drive'],
  ['Drive','Drive','Drive','home']
];

//devices tags
let d = 'Devices';
let devcs = [
  [d,d,d,d,'threeW','home',d],
  ['port1',d,d,d,d,d,d],
  [d,d,d,d,d,d,d],
  [d,d,d,d,d,d,d]
];

//port1 tags
let pt1 = [
  ['port1','port1','port1','port1'],
  ['port1','port1','port1',d]
];

let tapTrackP1 = 0; //counter to track how many times port1 icon is clicked

//threeWire
let tapTrack3 = 0; //counter to track how many times 3-wire icon is clicked
let sens3Summary = [' ',1,0]; //track active 3 wire sensor, interactive state, analog signal

function setup() {
  createCanvas(480, 272);
}

function draw() {
  if (tag == 'home') {
    homeScreen(grid);
  }
  if (tag == 'User'){
    pgrmScreen(grid);
  }
  if (tag == 'Drive'){
    driveScreen();
  }
  if (tag == 'Devices'){
    deviceScreen();
  }
  if (tag == 'port1'){
    port1Screen();
  }
  if (tag == 'threeW'){
    threeWScreen();
    grid[0][6] = sens3Summary[0];
  }
  //console.log(sens3Summary);
}

function mousePressed(){
  
  if (tag == 'home'){
    homeSelect(); 
  }
  if (tag == 'User'){
    pgrmSelect();
  }
  if (tag == 'Drive'){
    driveSelect();
  }
  if (tag == 'Devices'){
    deviceSelect();
  }
  if (tag == 'port1'){
    port1Select();
  }
  if (tag == 'threeW'){
    threeWSelect(sens3Summary);
  }
}


function mouseReleased(){
  if (tag == d){
    
    tag = devGrid[0][8];
    devGrid = [
      [0,0,0,0,0,0,0,d],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]
    ];
    
  } else {
  
  tag = grid[0][4];
  tapTrack3 = grid[1][4];
  tapTrackP1 = grid[0][5];
  sens3Summary = [grid[0][6], grid[1][6], grid[1][5]];
  if (sens3Summary[1] == 0){
    sens3Summary[1] = 1;
  }
  grid = [
    [0,0,0,0,tag,tapTrackP1,0],
    [0,0,0,0,tapTrack3,sens3Summary[2],1]
  ];
  }

  
}

function mouseDragged(){
    if (grid[0][6] == 'Potentiometer' && grid[1][6] == 0){
      getMouseAngle();
      sens3Summary = [grid[0][6], grid[1][6], grid[1][5]];
    }
  
  if (grid[0][6] == 'Light Sensor' && grid[1][6] == 0){
    let updateX = mouseX;
    if (mouseX < 150){
      updateX = 150;
    }
    if (mouseX > 330){
      updateX = 330;
    }
    grid[1][5] = updateX;
    sens3Summary = [grid[0][6], grid[1][6], grid[1][5]];
  }
    // return false
}

