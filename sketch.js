
var fixedrect,moverect;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor='yellow';
 fixedrect.velocityY=2;

moverect=createSprite(400,350,100,20);
moverect.shapeColor='yellow';
moverect.velocityY=-2;
}

function draw() {
  background(25,100,255); 
 // moverect.x=World.mouseX;
 // moverect.y=World.mouseY;

 //collide();
 bounceOff();
  drawSprites();
}

function collide(){
  if(fixedrect.x-moverect.x<= fixedrect.width/2+moverect.width/2
    && moverect.x-fixedrect.x<= fixedrect.width/2+moverect.width/2
    &&fixedrect.y-moverect.y<= fixedrect.height/2+moverect.height/2
    && moverect.y-fixedrect.y<= fixedrect.height/2+moverect.height/2  ){
      fixedrect.shapeColor='orange';
      moverect.shapeColor='orange';
    
}
else{

  fixedrect.shapeColor='green';
  moverect.shapeColor='green';
}
}

function bounceOff(){
  if(fixedrect.x-moverect.x<= fixedrect.width/2+moverect.width/2
    && moverect.x-fixedrect.x<= fixedrect.width/2+moverect.width/2
    &&fixedrect.y-moverect.y<= fixedrect.height/2+moverect.height/2
    && moverect.y-fixedrect.y<= fixedrect.height/2+moverect.height/2  ){
    fixedrect.velocityY=-1*fixedrect.velocityY;
    moverect.velocityY=-1*moverect.velocityY;  

    }
    else{
      fixedrect.velocityY=fixedrect.velocityY;
      moverect.velocityY=moverect.velocityY;
    }

}
