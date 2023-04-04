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
let playertwosolvestate = 0

function preload(){
  startscreen = loadImage('Photos/galaxy.jpg')
  backdrop = loadImage('Photos/outerspace.jpg')
  ship1 = loadImage('spaceship1.png')
  troid = loadImage('astroidR.png')
  
}

function setup() {
  frameRate(60);
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

function draw() {
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
}

function mainmenu(){
  if(stage == 0){
  image(startscreen, 0, 0, screenwidth, screenheight)
    fill('#00c5d4')
    rect(75, 250, 150, 75)
    fill('black')
    textSize(40)
    text('START!', 80, 300)
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
    // Draws Player One
    if(playerstate >= 1)
      strokeWeight(4);
    rect(p1X, p1Y, 100, 36)
    rect(p2X, p2Y, 100, 36)
  }
}
// Player One
function playerone(){
    // Player Ones Movement
      if (keyIsDown(87)) {
    p1Y = p1Y - playermovespeed;
  } else if (keyIsDown(83)) {
    p1Y = p1Y + playermovespeed;
  }
  if (keyIsDown(65)) {
    p1X = p1X - playermovespeed;
  } else if (keyIsDown(68)) {
    p1X = p1X + playermovespeed;
  }
  // Player Ones Collisions
  if(p1Y > dividerY - 30.00000001){
    p1Y = p1Y - 10
  }
  if(p1Y < 0){
    p1Y = p1Y + 10
  }
  if(p1X < 0){
    p1X = p1X + 10
  }
  if(p1X > screenwidth - 100){
    p1X = p1X - 10
  }
  
}
// Player Two
 function playertwo(){
    if (keyIsDown(73)) {
    p2Y = p2Y - playermovespeed;
  } else if (keyIsDown(75)) {
    p2Y = p2Y + playermovespeed;
  }
  if (keyIsDown(74)) {
    p2X = p2X - playermovespeed;
  } else if (keyIsDown(76)) {
    p2X = p2X + playermovespeed;
 }
   // Player Twos Collisions
  if(p2Y < dividerY + 1){
    p2Y = p2Y + 10
  }
  if(p2Y > screenheight - 36){
    p2Y = p2Y - 10
  }
  if(p2X < 0){
    p2X = p2X + 10
  }
  if(p2X > screenwidth - 100){
    p2X = p2X - 10
  }

 }
// Player Ones Asteroids
function asteroidsone(){
  if(playerstate >= 1){
    circle(asteroidone1X, asteroidone1Y, 50)
    image(troid, asteroidone1X-40, asteroidone1Y-40, 80, 80)
    circle(asteroidone2X, asteroidone2Y, 50)
    image(troid, asteroidone2X-40, asteroidone2Y-40, 80, 80)
    circle(asteroidone3X, asteroidone3Y, 50)
    image(troid, asteroidone3X-40, asteroidone3Y-40, 80, 80)
  }
}
// Player Ones Asteroids
function asteroidstwo(){
  if(playerstate >= 1){
    circle(asteroidtwo1X, asteroidtwo1Y, 50)
    image(troid, asteroidtwo1X-40, asteroidtwo1Y-40, 80, 80)
    circle(asteroidtwo2X, asteroidtwo2Y, 50)
    image(troid, asteroidtwo2X-40, asteroidtwo2Y-40, 80, 80)
    circle(asteroidtwo3X, asteroidtwo3Y, 50)
    image(troid, asteroidtwo3X-40, asteroidtwo3Y-40, 80, 80)
  }
}
// Player Ones Laser
function laserone(){
  if(playerstate >= 1 && keyIsDown(70)){
    push();
    fill(255,255,255,50);
    rect(p1X + 100, p1Y, 150, 36)
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
    fill(255,255,255,50);
    rect(p2X + 100, p2Y, 150, 36)
    pop();
  }
  else{
    fill('black')
  }
    
}
// Player Ones Puzzle
function puzzleone(){
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
    textSize(30)
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
  if(playerstate >= 1){
    textAlign(CENTER)
    textSize(30)
  text('C', asteroidtwo3X + 1, asteroidtwo3Y + 10)
  text('A', asteroidtwo1X, asteroidtwo1Y + 10)
  text('T', asteroidtwo2X, asteroidtwo2Y + 10)
  textSize(50)
  text(playertwoword1, 500, 770)
  text(playertwoword2, 550, 770)
  text(playertwoword3, 600, 770)
     if(p2X + 250 > asteroidtwo3X && p2X < asteroidtwo3X && p2Y < asteroidtwo3Y && p2Y + 36 > asteroidtwo3Y && keyIsDown(72) && playertwosolvestate == 0){
      asteroidtwo3X = 100000
      playertwoword1 = ('C')
      playertwosolvestate = 1
     }
       if(p2X + 250 > asteroidtwo1X && p2X < asteroidtwo1X && p2Y < asteroidtwo1Y && p2Y + 36 > asteroidtwo1Y && keyIsDown(72) && playertwosolvestate == 1){
      asteroidtwo1X = 100000
      playertwoword2 = ('A')
      playertwosolvestate = 2
    }
    if(p2X + 250 > asteroidtwo2X && p2X < asteroidtwo2X && p2Y < asteroidtwo2Y && p2Y + 36 > asteroidtwo2Y && keyIsDown(72) && playertwosolvestate == 2){
      asteroidtwo2X = 100000
      playertwoword3 = ('T')
      playertwosolvestate = 3
    }
  }
}
