// Player One
function playerone(){
   if(playerstate >= 1){
     //rect(p1X+40, p1Y+20, 50, 10)
    image(ship1, p1X-27, p1Y-26, 145, 90)
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
}
// Player Two
 function playertwo(){
    if(playerstate >= 1){
    //rect(p2X+40, p2Y+20, 50, 10)
    image(ship2, p2X-27, p2Y-26, 145, 90)
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
 }