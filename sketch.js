var garden,cat,mouse
var gardenImg
var catImg1,catImg2,catImg3
var mouseImg1,mouseImg2,mouseImg3

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");

    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden=createSprite(500,400)
    garden.addImage(gardenImg)
    garden.scale=1.1

    cat = createSprite(850,620,10,20)
    cat.addAnimation("catsitting",catImg1)
    cat.scale=0.2

    mouse = createSprite(150,620,10,20)
    mouse.addAnimation("mouseEating",mouseImg1)
    mouse.scale=0.2
    
}

function draw() {
    
    background(0);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.x=250
        cat.addAnimation("catlastImg",catImg3)
        cat.changeAnimation("catlastImg")

        mouse.addAnimation("teasing",mouseImg3)
        mouse.changeAnimation("teasing")
    }







    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
     cat.velocityX=-5
     cat.addAnimation("catrunning",catImg2)
     cat.changeAnimation("catrunning")

     mouse.addAnimation("mousejumping",mouseImg2)
     mouse.changeAnimation("mousejumping")

    }


}
