
function preload(){
ship=loadImage("spaceship.png");
bg=loadImage("space.jpeg")
alien=loadImage("alien.png")
missile=loadImage("missile.png" )
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  a=createSprite(windowWidth/2,windowHeight-50,20,20)
a.addImage(ship)
a.scale=0.2


}

function draw() {
  background(bg);
if(keyDown("Left")){
  a.x=a.x-10
}
if(keyDown("Right")){
  a.x=a.x+10
}
if (keyDown("space")) {
  createMissile();
  
}



  drawSprites()
  spawnAliens()

}
function spawnAliens(){
if(frameCount%60===0){
  b=createSprite(random(10,windowWidth),0,20,20)
  b.addImage(alien)
  b.velocityY=3
  b.scale=0.5

}



}
function createMissile() {
  var Missile= createSprite(a.x, a.y, 60, 10);
  Missile.addImage(missile);
  Missile.x = 360;
  Missile.x=a.x;
  Missile.velocityY = -4;
  Missile.lifetime = 200;
  Missile.scale = 0.1;
  a.depth=missile.depth+1
  return Missile;
   
}