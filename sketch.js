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
}

  let grid = [];
  grid = [
    [0,0,0,0,'home'],
    [0,0,0,0,0]
  ];
  let tag = grid[0][4];

let devGrid = [
  [0,0,0,0,0,0,0,'Devices'],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];
  

let tags = [
    //['Drive','Devices','Settings','VEX'],
    ['Drive','Devices','home','home'],
    ['home','home','home','User']
  ];

let pgrms = [
  ['User','User','User','User'],
  ['User','User','User','home']
];

let drvs = [
  ['Drive','Drive','Drive','Drive'],
  ['Drive','Drive','Drive','home']
];

let d = 'Devices';
let devcs = [
  [d,d,d,d,d,'home',d],
  [d,d,d,d,d,d,d],
  [d,d,d,d,d,d,d],
  [d,d,d,d,d,d,d]
];


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
  grid = [
    [0,0,0,0,tag],
    [0,0,0,0,0]
  ];
  }
}


