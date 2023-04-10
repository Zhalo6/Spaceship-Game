let screenwidth = 1200;
let screenheight = 800;
let dividerY = 400;
let stage = 0;
let playerstate = 0;
let startbuttonx = 75
let startbuttony = 250
let p1X = 10;
let p1Y = 200;
let p2X = 10;
let p2Y = 600;
let playermovespeed = 10;
let asteroidone1X;
let asteroidone1Y;
let asteroidone2X;
let asteroidone2Y;
let asteroidone3X;
let asteroidone3Y;
let asteroidtwo1X;
let asteroidtwo1Y;
let asteroidtwo2X;
let asteroidtwo2Y;
let asteroidtwo3X;
let asteroidtwo3Y;
let laseroneW = 600;
let laseroneH = 450;
let laseroneW2 = 600;
let laseroneH2 = 450;
let timerValue = 55;
let timerValue2 = 55;
let timerx = 550;
let timery = 75;
let timerx2 = 550;
let timery2 = 490;
let playeronescore = 0;
let playertwoscore = 0;
let playeronepuzzle = 0;
let playeroneletter1 = "D";
let playeroneletter2 = "O";
let playeroneletter3 = "G";
let playeroneword1 = "-";
let playeroneword2 = "-";
let playeroneword3 = "-";
let playeronesolvestate = 0;
let playertwopuzzle = 0;
let playertwoletter1 = "C";
let playertwoletter2 = "A";
let playertwoletter3 = "T";
let playertwoword1 = "-";
let playertwoword2 = "-";
let playertwoword3 = "-";
let explosion;
let pausedgame = false;
let playertwosolvestate = 0;
let winstate = false;
let winner = 0;
let playernumber1 = "Player One";
let playernumber2 = "Player Two";

// Loads Assets
function preload() {
  startscreen = loadImage("Resources/Photos/galaxy.jpg");
  backdrop = loadImage("Resources/Photos/outerspace.jpg");
  laser = loadImage("Resources/Photos/laser.png");
  laser2 = loadImage("Resources/Photos/laser2.png");
  ship1 = loadImage("Resources/Photos/spaceship1.png");
  ship2 = loadImage("Resources/Photos/spaceship2.png");
  troid = loadImage("Resources/Photos/astroidR.png");
  explosion = loadImage("Resources/Photos/exploding.gif")
  startbutton = loadImage("Resources/Photos/startbutton.png")
  mainfont = loadFont("Resources/Fonts/mainfont.ttf");
}
// Setsup Game
function setup() {
  frameRate(60);
  textFont("mainfont");
  createCanvas(screenwidth, screenheight);
  asteroidone1X = random(140, 400);
  asteroidone1Y = random(125, 300);
  asteroidone2X = random(400, 700);
  asteroidone2Y = random(125, 300);
  asteroidone3X = random(700, 1100);
  asteroidone3Y = random(125, 300);
  asteroidtwo1X = random(140, 400);
  asteroidtwo1Y = random(425, 775);
  asteroidtwo2X = random(400, 700);
  asteroidtwo2Y = random(425, 775);
  asteroidtwo3X = random(700, 1100);
  asteroidtwo3Y = random(425, 775);
}
//Functon Declaration
function draw() {
  if (pausedgame == false) {
    clear();
    mainmenu();
    levelsetup();
    playerone();
    playertwo();
    asteroidsone();
    asteroidstwo();
    laserone();
    lasertwo();
    puzzleone();
    puzzletwo();
    timer();
    timertwo();
    pausemenu();
    gameend();
  } else {
    pausemenu();
  }
}
// Start Menu
function mainmenu() {
  if (stage == 0) {
    image(startscreen, 0, 0, screenwidth, screenheight);
    push();
    noStroke();
    fill("#00c5d4");
    rect(startbuttonx, startbuttony, 150, 75, 20);
    pop();
    /*
    fill("black");
    push();
    stroke("white");
    textSize(24);
    text("START!", 83, 298);
    pop();*/
    image(startbutton, startbuttonx, startbuttony, 150, 75)
  }
  if (
    mouseX > 75 &&
    mouseX < 75 + 150 &&
    mouseY > 250 &&
    mouseY < 250 + 75 &&
    stage == 0 &&
    mouseIsPressed == true
  ) {
    stage = 1;
    playerstate = 1;
  }
}
// Main Game
function levelsetup() {
  if (stage >= 1) {
    image(backdrop, 0, 0, screenwidth, screenheight);
    stroke("white");
    strokeWeight(10);
    line(0, dividerY, 1920, 400);
  }
}
// Player Ones Laser
function laserone() {
  if (playerstate >= 1 && keyIsDown(70)) {
    push();
    fill(255, 255, 255, 50);
    //rect(p1X + 120, p1Y+14, laseroneW, laseroneH)
    image(laser, p1X - 85, p1Y - 180, laseroneW, laseroneH);
    pop();
  } else {
    fill("black");
  }
}
// Player Twos Laser
function lasertwo() {
  if (playerstate >= 1 && keyIsDown(72)) {
    push();
    // rect(p2X + 120, p2Y+14, 130, 10)
    image(laser2, p2X - 85, p2Y - 180, laseroneW2, laseroneH2);
    pop();
  } else {
    fill("black");
  }
}
// Player One Timer
function timer() {
  if (playerstate >= 1) {
    strokeWeight(4);
    textSize(50);
    if (timerValue >= 10) {
      text("" + timerValue, timerx, timery);
    }
    if (timerValue < 10) {
      text("0" + timerValue, timerx, timery);
    }
    if (frameCount % 60 == 0 && timerValue > 0) {
      timerValue--;
    }
  }
}
// Player Two Timer
function timertwo() {
  if (playerstate >= 1) {
    textSize(50);
    if (timerValue2 >= 10) {
      text("" + timerValue2, timerx2, timery2);
    }
    if (timerValue2 < 10) {
      text("0" + timerValue2, timerx2, timery2);
    }
    if (frameCount % 60 == 0 && timerValue2 > 0) {
      timerValue2 = timerValue2 - 1;
    }
  }
}
// Player Ones Puzzle
function puzzleone() {
  strokeWeight(4);
  if (playeronesolvestate < 1) {
    playeroneword1 = "-";
    playeroneword2 = "-";
    playeroneword3 = "-";
  }
  if (playeronepuzzle == 0) {
    playeroneletter1 = "D";
    playeroneletter2 = "O";
    playeroneletter3 = "G";
  }
  if (playeronepuzzle == 1) {
    playeroneletter1 = "D";
    playeroneletter2 = "A";
    playeroneletter3 = "Y";
  }
  if (playeronepuzzle == 2) {
    playeroneletter1 = "C";
    playeroneletter2 = "A";
    playeroneletter3 = "T";
  }
  if (playeronepuzzle == 3) {
    playeroneletter1 = "H";
    playeroneletter2 = "O";
    playeroneletter3 = "P";
  }
  if (playeronepuzzle == 4) {
    playeroneletter1 = "P";
    playeroneletter2 = "I";
    playeroneletter3 = "G";
  }

  if (playerstate >= 1) {
    textAlign(CENTER);
    textSize(25);
    text(playeroneletter1, asteroidone2X + 1, asteroidone2Y + 10);
    text(playeroneletter2, asteroidone3X, asteroidone3Y + 10);
    text(playeroneletter3, asteroidone1X, asteroidone1Y + 10);
    textSize(50);
    text(playeroneword1, 500, 370);
    text(playeroneword2, 550, 370);
    text(playeroneword3, 600, 370);
    if (
      p1X + 300 > asteroidone2X &&
      p1X < asteroidone2X &&
      p1Y < asteroidone2Y &&
      p1Y + 36 > asteroidone2Y &&
      keyIsDown(70) &&
      playeronesolvestate == 0
    ) {
      asteroidone2X = 100000;
      playeroneword1 = playeroneletter1;
      playeronesolvestate = 1;
    }
    if (
      p1X + 300 > asteroidone3X &&
      p1X < asteroidone3X &&
      p1Y < asteroidone3Y &&
      p1Y + 36 > asteroidone3Y &&
      keyIsDown(70) &&
      playeronesolvestate == 1
    ) {
      asteroidone3X = 100000;
      playeroneword2 = playeroneletter2;
      playeronesolvestate = 2;
    }
    if (
      p1X + 300 > asteroidone1X &&
      p1X < asteroidone1X &&
      p1Y < asteroidone1Y &&
      p1Y + 36 > asteroidone1Y &&
      keyIsDown(70) &&
      playeronesolvestate == 2
    ) {
      asteroidone1X = 100000;
      playeroneword3 = playeroneletter3;
      playeronepuzzle = playeronepuzzle + 1;
      playeronesolvestate = 0;
      timerValue = timerValue + 5;
      playeronescore = playeronescore + 1;
    }
    if (
      (playeronepuzzle == 0 && asteroidone1X >= 10000) ||
      (playeronepuzzle == 1 && asteroidone1X >= 10000)
    ) {
      asteroidone2X = random(140, 400);
      asteroidone2Y = random(125, 300);
      asteroidone3X = random(400, 700);
      asteroidone3Y = random(125, 300);
      asteroidone1X = random(700, 1100);
      asteroidone1Y = random(125, 300);
    }
    if (
      (playeronepuzzle == 2 && asteroidone1X >= 10000) ||
      (playeronepuzzle == 3 && asteroidone1X >= 10000)
    ) {
      asteroidone1X = random(140, 400);
      asteroidone1Y = random(125, 300);
      asteroidone3X = random(400, 700);
      asteroidone3Y = random(125, 300);
      asteroidone2X = random(700, 1100);
      asteroidone2Y = random(125, 300);
    }
    if (playeronepuzzle == 4 && asteroidone1X >= 10000) {
      asteroidone3X = random(140, 400);
      asteroidone3Y = random(125, 300);
      asteroidone2X = random(400, 700);
      asteroidone2Y = random(125, 300);
      asteroidone1X = random(700, 1100);
      asteroidone1Y = random(125, 300);
    }
  }
}
// Player Twos Puzzle
function puzzletwo() {
  strokeWeight(4);
  if (playertwosolvestate < 1) {
    playertwoword1 = "-";
    playertwoword2 = "-";
    playertwoword3 = "-";
  }
  if (playertwopuzzle == 0) {
    playertwoletter1 = "C";
    playertwoletter2 = "A";
    playertwoletter3 = "T";
  }
  if (playertwopuzzle == 1) {
    playertwoletter1 = "C";
    playertwoletter2 = "O";
    playertwoletter3 = "P";
  }
  if (playertwopuzzle == 2) {
    playertwoletter1 = "R";
    playertwoletter2 = "O";
    playertwoletter3 = "D";
  }
  if (playertwopuzzle == 3) {
    playertwoletter1 = "A";
    playertwoletter2 = "P";
    playertwoletter3 = "E";
  }
  if (playertwopuzzle == 4) {
    playertwoletter1 = "D";
    playertwoletter2 = "R";
    playertwoletter3 = "Y";
  }
  if (playerstate >= 1) {
    textAlign(CENTER);
    textSize(25);
    text(playertwoletter1, asteroidtwo3X + 1, asteroidtwo3Y + 10);
    text(playertwoletter2, asteroidtwo1X, asteroidtwo1Y + 10);
    text(playertwoletter3, asteroidtwo2X, asteroidtwo2Y + 10);
    textSize(50);
    text(playertwoword1, 500, 770);
    text(playertwoword2, 550, 770);
    text(playertwoword3, 600, 770);
    if (
      p2X + 300 > asteroidtwo3X &&
      p2X < asteroidtwo3X &&
      p2Y < asteroidtwo3Y &&
      p2Y + 36 > asteroidtwo3Y &&
      keyIsDown(72) &&
      playertwosolvestate == 0
    ) {
      asteroidtwo3X = 100000;
      playertwoword1 = playertwoletter1;
      playertwosolvestate = 1;
    }
    if (
      p2X + 300 > asteroidtwo1X &&
      p2X < asteroidtwo1X &&
      p2Y < asteroidtwo1Y &&
      p2Y + 36 > asteroidtwo1Y &&
      keyIsDown(72) &&
      playertwosolvestate == 1
    ) {
      asteroidtwo1X = 100000;
      playertwoword2 = playertwoletter2;
      playertwosolvestate = 2;
    }
    if (
      p2X + 300 > asteroidtwo2X &&
      p2X < asteroidtwo2X &&
      p2Y < asteroidtwo2Y &&
      p2Y + 36 > asteroidtwo2Y &&
      keyIsDown(72) &&
      playertwosolvestate == 2
    ) {
      asteroidtwo2X = 100000;
      playertwoword3 = playertwoletter3;
      playertwopuzzle = playertwopuzzle + 1;
      playertwosolvestate = 0;
      timerValue2 = timerValue2 + 5;
      playertwoscore = playertwoscore + 1;
    }
  }
  if (
    (playertwopuzzle == 0 && asteroidtwo2X >= 10000) ||
    (playertwopuzzle == 1 && asteroidtwo2X >= 10000)
  ) {
    asteroidtwo3X = random(140, 400);
    asteroidtwo3Y = random(425, 775);
    asteroidtwo1X = random(400, 700);
    asteroidtwo1Y = random(425, 775);
    asteroidtwo2X = random(700, 1100);
    asteroidtwo2Y = random(425, 775);
  }
  if (
    (playertwopuzzle == 2 && asteroidtwo2X >= 10000) ||
    (playertwopuzzle == 3 && asteroidtwo2X >= 10000)
  ) {
    asteroidtwo1X = random(140, 400);
    asteroidtwo1Y = random(425, 775);
    asteroidtwo3X = random(400, 700);
    asteroidtwo3Y = random(425, 775);
    asteroidtwo2X = random(700, 1100);
    asteroidtwo2Y = random(425, 775);
  }
  if (playertwopuzzle == 4 && asteroidtwo2X >= 10000) {
    asteroidtwo2X = random(140, 400);
    asteroidtwo2Y = random(425, 775);
    asteroidtwo3X = random(400, 700);
    asteroidtwo3Y = random(425, 775);
    asteroidtwo1X = random(700, 1100);
    asteroidtwo1Y = random(425, 775);
  }
}
//Pauses Game
function keyPressed() {
  if (keyCode == 27 && stage != 0) {
    pausedgame = !pausedgame;
  }
}
// Pause Menu
function pausemenu() {
  if (pausedgame == true && stage >= 1) {
    push();
    fill("grey");
    rect(0, 0, screenwidth, screenheight);
    pop();
    textSize(60);
    text("PAUSED", screenwidth / 2, screenheight / 2);
    push();
    fill("black");
    rect(0, screenheight / 2 + 40, screenwidth, 75);
    pop();
    textSize(40);
    textAlign(CENTER);
    text("MAIN MENU", screenwidth / 2, screenheight / 2 + 100);
    textSize(20);
    text("(ESC TO UNPAUSE)", screenwidth / 2, screenheight / 2 + 25);
  }
  //Main Menu Button
  if (
    stage >= 1 &&
    pausedgame == true &&
    mouseY > screenheight / 2 + 40 &&
    mouseY < screenheight / 2 + 115 &&
    mouseX > 0 &&
    mouseX < screenwidth &&
    mouseIsPressed == true
  ) {
    stage = 0;
    pausedgame = false
    timerValue = 30;
    timerValue2 = 30;
    p1X = 10;
    p1Y = 200;
    p2X = 10;
    p2Y = 600;
    playeronepuzzle = 0;
    playeronesolvestate = 0;
    playertwopuzzle = 0;
    playertwosolvestate = 0;
    pausedgame = false
  }
  if (stage == 0) {
    image(startscreen, 0, 0, screenwidth, screenheight);
    push();
    noStroke();
    fill("#00c5d4");
    rect(startbuttonx, startbuttony, 150, 75, 20);
    pop();
    /*
    fill("black");
    push();
    stroke("white");
    textSize(24);
    text("START!", 83, 298);
    pop();*/
    image(startbutton, startbuttonx, startbuttony, 150, 75)
  }
  if (
    mouseX > 75 &&
    mouseX < 75 + 150 &&
    mouseY > 250 &&
    mouseY < 250 + 75 &&
    stage == 0 &&
    mouseIsPressed == true
  ) {
    stage = 1;
    playerstate = 1;
  }
}
// End
function gameend() {
  if (timerValue == 0) {
    winstate = true;
    winner = playernumber2;
  }
  if (playertwoscore == 5 && playeronescore <=4) {
    winstate = true;
    winner = playernumber2;
  }
  if (timerValue2 == 0) {
    winstate = true;
    winner = playernumber1;
  }
  if (playeronescore == 5 && playertwoscore <= 4) {
    winstate = true;
    winner = playernumber1;
  }
  if(winner == playernumber1){
    image(explosion, 0, 400, screenwidth, screenheight/2);
    explosion.play();
  }
  if(winner == playernumber2){
    image(explosion, 0, 0, screenwidth, screenheight/2);
    explosion.play();
  }
  if (winstate == true) {
    playermovespeed = 0;
    timerValue = 0;
    timerValue2 = 0;
    rectMode(CENTER);
    rect(screenwidth / 2, screenheight / 2, 800, 100);
    textAlign(CENTER);
    textSize(45);
    text(winner + " Wins!", screenwidth / 2, screenheight / 2 + 25);
  }
  
}
