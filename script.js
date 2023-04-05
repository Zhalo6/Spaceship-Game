let screenwidth = 1200
let screenheight = 800
let dividerY = 400
let stage = 0
let playerstate = 0
let p1X = 10
let p1Y = 200
let p2X = 10
let p2Y = 600
let playermovespeed = 10
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
let laseroneW = 140
let laseroneH = 50
let laseroneW2 = 140
let laseroneH2 = 50
let timerValue = 30
let timerValue2 = 30
let timerx = 550
let timery = 75
let timerx2 = 550
let timery2 = 490
let playeronepuzzle = 0
let playeroneletter1 = 'D'
let playeroneletter2 = 'O'
let playeroneletter3 = 'G'
let playeroneword1 = '-'
let playeroneword2 = '-'
let playeroneword3 = '-'
let playeronesolvestate = 0
let playertwopuzzle = 0
let playertwoletter1 = 'C'
let playertwoletter2 = 'A'
let playertwoletter3 = 'T'
let playertwoword1 = '-'
let playertwoword2 = '-'
let playertwoword3 = '-'
let pausedgame = false
let playertwosolvestate = 0

// Loads Assets
function preload(){
  startscreen = loadImage('Photos/galaxy.jpg')
  backdrop = loadImage('Photos/outerspace.jpg')
  laser = loadImage('Photos/laser.png')
  laser2 = loadImage('Photos/laser2.png')
  ship1 = loadImage('Photos/spaceship1.png')
  ship2 = loadImage('Photos/spaceship2.png')
  troid = loadImage('Photos/astroidR.png')
  mainfont = loadFont('mainfont.otf')
}
// Setsup Game
function setup() {
  frameRate(60);
  textFont('mainfont')
  createCanvas(screenwidth, screenheight);
  asteroidone1X = random(140, 400)
  asteroidone1Y = random(125, 300)
  asteroidone2X = random(400, 700)
  asteroidone2Y = random(125, 300)
  asteroidone3X = random(700, 1100)
  asteroidone3Y = random(125, 300)
  asteroidtwo1X = random(140, 400)
  asteroidtwo1Y = random(425, 775)
  asteroidtwo2X = random(400, 700)
  asteroidtwo2Y = random(425, 775)
  asteroidtwo3X = random(700, 1100)
  asteroidtwo3Y = random(425, 775)
}
// Pause Menu + Functon Declaration
function draw() {
  if(pausedgame == false){
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
  }
  pausemenu();
}
// Start Menu
function mainmenu(){
  if(stage == 0){
  image(startscreen, 0, 0, screenwidth, screenheight)
    fill('#00c5d4')
    rect(75, 250, 150, 75)
    fill('black')
    textSize(60)
    stroke('black')
    text('START!', 85, 295)
  }
  if(mouseX > 75 && mouseX < 75 + 150 && mouseY > 250 && mouseY < 250 + 75 && stage == 0 && mouseIsPressed == true){
    stage = stage + 1
    playerstate = playerstate + 1
  }
}
// Main Game
function levelsetup(){
  if(stage >= 1){
     image(backdrop, 0, 0, screenwidth, screenheight)
    stroke('white')
    strokeWeight(10);
    line(0, dividerY, 1920, 400)
}
}
// Player Ones Laser
function laserone(){
  if(playerstate >= 1 && keyIsDown(70)){
    push();
    fill(255,255,255,50);
  //rect(p1X + 120, p1Y+14, laseroneW, laseroneH)
     image(laser, p1X + 100, p1Y - 5, laseroneW, laseroneH)
    pop();
  }
  else{
    fill('black')
  }
    
}
// Player Twos Laser
function lasertwo(){
  if(playerstate >= 1 && keyIsDown(72)){
    push();
     // rect(p2X + 120, p2Y+14, 130, 10)
     image(laser2, p2X + 100, p2Y - 5, laseroneW2, laseroneH2)
    pop();
  }
  else{
    fill('black')
  }
    
}
// Player One Timer
function timer(){
  if(playerstate >= 1){
strokeWeight(4);
 textSize(50)
  if (timerValue >= 10) {
    text("" + timerValue, timerx, timery);
  }
  if (timerValue < 10) {
    text('0' + timerValue, timerx, timery);
  } 
  if (frameCount % 60 == 0 && timerValue > 0){
    timerValue--;
  }
    if (timerValue == 0){
    text ("You lose!", 550, 150)
}
}
}
// Player Two Timer
function timertwo(){
  if(playerstate >= 1){
 textSize(50)
  if (timerValue2 >= 10) {
    text("" + timerValue2, timerx2, timery2);
  }
  if (timerValue2 < 10) {
    text('0' + timerValue2, timerx2, timery2);
  } 
  if (frameCount % 60 == 0 && timerValue2 > 0){
    timerValue2 = timerValue2 - 1
  }
     if (timerValue2 == 0){
    text ("You lose!", 550, 560)
}
}
}
// Player Ones Puzzle
function puzzleone(){
    strokeWeight(4);
  if(playeronesolvestate < 1){
    playeroneword1 = '-'
     playeroneword2 = '-'
     playeroneword3 = '-'
  }
  if(playeronepuzzle == 0){
      playeroneletter1 = 'D'
      playeroneletter2 = 'O'
      playeroneletter3 = 'G'
    }
  if(playeronepuzzle == 1){
      playeroneletter1 = 'D'
      playeroneletter2 = 'A'
      playeroneletter3 = 'Y'
    }
   if(playeronepuzzle == 2){
      playeroneletter1 = 'C'
      playeroneletter2 = 'A'
      playeroneletter3 = 'T'
    }
  if(playeronepuzzle == 3){
      playeroneletter1 = 'H'
      playeroneletter2 = 'O'
      playeroneletter3 = 'P'
    }
  
  if(playerstate >= 1){
    textAlign(CENTER)
    textSize(25)
  text(playeroneletter1, asteroidone2X + 1, asteroidone2Y + 10)
  text(playeroneletter2, asteroidone3X, asteroidone3Y + 10)
  text(playeroneletter3, asteroidone1X, asteroidone1Y + 10)
  textSize(50)
  text(playeroneword1, 500, 370)
  text(playeroneword2, 550, 370)
  text(playeroneword3, 600, 370)
    if(p1X + 250 > asteroidone2X && p1X < asteroidone2X && p1Y < asteroidone2Y && p1Y + 36 > asteroidone2Y && keyIsDown(70) && playeronesolvestate == 0){
      asteroidone2X = 100000
      playeroneword1 = playeroneletter1
      playeronesolvestate = 1
    }
    if(p1X + 250 > asteroidone3X && p1X < asteroidone3X && p1Y < asteroidone3Y && p1Y + 36 > asteroidone3Y && keyIsDown(70) && playeronesolvestate == 1){
      asteroidone3X = 100000
      playeroneword2 = playeroneletter2
      playeronesolvestate = 2
    }
    if(p1X + 250 > asteroidone1X && p1X < asteroidone1X && p1Y < asteroidone1Y && p1Y + 36 > asteroidone1Y && keyIsDown(70) && playeronesolvestate == 2){
      asteroidone1X = 100000
      playeroneword3 = playeroneletter3
      playeronepuzzle = playeronepuzzle + 1
      playeronesolvestate = 0
       timerValue = timerValue + 5
    }
    if(playeronepuzzle >= 0 && playeronepuzzle <= 1 && asteroidone1X >= 10000){
  asteroidone2X = random(140, 400)
  asteroidone2Y = random(125, 300)
  asteroidone3X = random(400, 700)
  asteroidone3Y = random(125, 300)
  asteroidone1X = random(700, 1100)
  asteroidone1Y = random(125, 300)
    }
    if(playeronepuzzle >= 2 && playeronepuzzle <= 3 && asteroidone1X >= 10000){
  asteroidone1X = random(140, 400)
  asteroidone1Y = random(125, 300)
  asteroidone3X = random(400, 700)
  asteroidone3Y = random(125, 300)
  asteroidone2X = random(700, 1100)
  asteroidone2Y = random(125, 300)
    }
   
   
}
}
// Player Twos Puzzle
function puzzletwo(){
    strokeWeight(4);
   if(playertwosolvestate < 1){
    playertwoword1 = '-'
     playertwoword2 = '-'
     playertwoword3 = '-'
  }
  if(playertwopuzzle == 0){
      playertwoletter1 = 'C'
      playertwoletter2 = 'A'
      playertwoletter3 = 'T'
  }
  if(playertwopuzzle == 1){
      playertwoletter1 = 'C'
      playertwoletter2 = 'O'
      playertwoletter3 = 'P'
  }
  if(playerstate >= 1){
    textAlign(CENTER)
    textSize(25)
  text( playertwoletter1, asteroidtwo3X + 1, asteroidtwo3Y + 10)
  text( playertwoletter2, asteroidtwo1X, asteroidtwo1Y + 10)
  text( playertwoletter3, asteroidtwo2X, asteroidtwo2Y + 10)
  textSize(50)
  text(playertwoword1, 500, 770)
  text(playertwoword2, 550, 770)
  text(playertwoword3, 600, 770)
     if(p2X + 250 > asteroidtwo3X && p2X < asteroidtwo3X && p2Y < asteroidtwo3Y && p2Y + 36 > asteroidtwo3Y && keyIsDown(72) && playertwosolvestate == 0){
      asteroidtwo3X = 100000
      playertwoword1 =  playertwoletter1
      playertwosolvestate = 1
     }
       if(p2X + 250 > asteroidtwo1X && p2X < asteroidtwo1X && p2Y < asteroidtwo1Y && p2Y + 36 > asteroidtwo1Y && keyIsDown(72) && playertwosolvestate == 1){
      asteroidtwo1X = 100000
      playertwoword2 =  playertwoletter2
      playertwosolvestate = 2
    }
    if(p2X + 250 > asteroidtwo2X && p2X < asteroidtwo2X && p2Y < asteroidtwo2Y && p2Y + 36 > asteroidtwo2Y && keyIsDown(72) && playertwosolvestate == 2){
      asteroidtwo2X = 100000
      playertwoword3 =  playertwoletter3
      playertwopuzzle = playertwopuzzle + 1
      playertwosolvestate = 0
      timerValue2 = timerValue2 + 5
    }
  }
  if(playertwopuzzle >= 0 && playertwopuzzle <= 1 && asteroidtwo2X >= 10000 && playertwosolvestate == 0){
  asteroidtwo3X = random(140, 400)
  asteroidtwo3Y = random(425, 775)
  asteroidtwo1X = random(400, 700)
  asteroidtwo1Y = random(425, 775)
  asteroidtwo2X = random(700, 1100)
  asteroidtwo2Y = random(425, 775)
  }
}
//Pauses Game
function keyPressed(){
  if(keyCode == 27 && stage != 0){
      pausedgame = !pausedgame
  }
}
// Pause Menu
function pausemenu(){
  if(pausedgame == true){
    push();
    fill('grey')
    rect(0, 0, screenwidth, screenheight)
    pop();
    textSize(60)
    text('PAUSED', screenwidth/2, screenheight/2)
     textSize(40)
    text('MAIN MENU (WIP)', screenwidth/2, screenheight/2 + 100)
    textSize(20)
    text('(ESC TO UNPAUSE)', screenwidth/2, screenheight/2 + 25)
  }
}