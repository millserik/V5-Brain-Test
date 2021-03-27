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
}
// 2x4 grid background and tag pass[0][4]
  let grid = [];
  grid = [
    [0,0,0,0,'home',0],
    [0,0,0,0,0,0]
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
  }
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
    threeWSelect();
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
  grid = [
    [0,0,0,0,tag,tapTrackP1],
    [0,0,0,0,tapTrack3,0]
  ];
  }
}


