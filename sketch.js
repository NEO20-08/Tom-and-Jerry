var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg,mouseImg2;
var bg;
function preload() {
bg = loadImage("images/garden.png")
catImg1 = loadAnimation("images/cat1.png")
catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
catImg4 = loadAnimation("images/cat4.png")

mouseImg1 = loadAnimation("images/mouse1.png")
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat  = createSprite(800,600);
    cat.scale = 0.2;
cat.addAnimation("sleeping",catImg1)
cat.addAnimation("catRunning",catImg2);

mouse  = createSprite(200,600);
mouse.scale = 0.1;
mouse.addAnimation("sleeping",mouseImg1)
mouse.addAnimation("mouseRunning",mouseImg2);

}

function draw() {

    background(bg);
    
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.changeAnimation("catRunning",catImg2);
    
}
  if(keyCode === LEFT_ARROW){
    mouse.velocityX = -5;
    mouse.changeAnimation("mouseRunning",mouseImg2);
  }
}

function isTouching(){
    
}


