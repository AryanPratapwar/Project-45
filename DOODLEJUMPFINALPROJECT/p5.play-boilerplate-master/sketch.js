var bkg,Wpad,Bpad,Gpad,JdoodlerR,JdoodlerL;
var bkgSprite,Jumper,score=0;
var gamestate = 0;
var greenGroup, lineGroup,blueGroup;
function preload(){
  //for background image for background sprite
  bkg=loadImage("Images/BKG.png");
  Wpad=loadImage("Images/Wpad.png");
  Bpad=loadImage("Images/Bpad.png");
  Gpad=loadImage("Images/Gpad.png");
  JdoodlerR=loadImage("Images/jumperR.png");
  JdoodlerL=loadImage("Images/jumperL.png");
}

function setup() {
  createCanvas(1000,580);
  bkgSprite=createSprite(710,250);
  bkgSprite.addImage("bkg",bkg);
  greenGroup=new Group();
  Jumper=createSprite(710,530);
  Jumper.addImage("JdoodlerR",JdoodlerR); 
  Jumper.addImage("JdoodlerL",JdoodlerL);
  Jumper.visible=false;
  Jumper.scale=0.3;
  lineGroup=new Group();
  Jumper.setCollider("rectangle",-25,80,120,50);
  blueGroup=new Group();
}

function draw() {
    background(255)

    drawSprites();
    text("Score : "+score,700,50)
    if(gamestate==0){
      textSize(50);
      text("DOODLE JUMP RE",500,90);
      textSize(15);
      text("Press Space To Continue",650,150)
    }

    if(keyDown("space")&& gamestate==0){
      gamestate=1;
      Jumper.visible=true;
    }

    if(gamestate==1){
      greenPad();
      
      if(keyDown(LEFT_ARROW)){
        Jumper.changeImage("JdoodlerL");
        Jumper.x = Jumper.x -10
      }

      if(keyDown(RIGHT_ARROW)){
        Jumper.changeImage("JdoodlerR");
        Jumper.x = Jumper.x +10
      }

      if(keyDown(UP_ARROW)){
        Jumper.velocityY=-12;
      }

      if(Jumper.x<450){
        Jumper.x = 950
      }

      if(Jumper.x>950){
        Jumper.x = 450
      }

      if(Jumper.isTouching(greenGroup)||Jumper.isTouching(blueGroup)){
        Jumper.velocityY=0;
        score = Math.round(score+0.5)
      }

      // if(score>=20){
      //   bluePad();
      // }

       
     
     Jumper.debug=true; 

      Jumper.velocityY=Jumper.velocityY+1;
    }
    
}

function greenPad(){
//number of pads to appear 
if(frameCount%50==0){
  //create the sprite for pad at random  x and y.
  randX=random(500,900);
  randY=random(50,60);
  var pad= createSprite(randX,randY);
  pad.addImage("Gpad",Gpad)
  pad.velocityY=2;
  greenGroup.add(pad);
  pad.lifetime=270; 
  // var line = createSprite(randX,pad.y+5,60,10)
  // line.velocityY=pad.velocityY
  // lineGroup.add(line);
  // line.lifetime=270;
  // pad.debug=true;
}
}

// function bluePad(){
//   //number of pads to appear 
//   if(frameCount%60==0){
//     //create the sprite for pad at random  x and y.
//     randX=random(500,900);
//     randY=random(50,60);
//     var pad= createSprite(randX,randY);
//     pad.addImage("Bpad",Bpad)
//     pad.velocityY=2;
//     pad.velocityX=5;
//     if(pad.x>800){
//       pad.velocityX=-5;
//     }
//     blueGroup.add(pad);
//     pad.lifetime=270;
    
//   }
// }