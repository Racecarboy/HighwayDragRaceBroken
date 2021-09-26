var SuperMarioBrosStage;
var MarioStageImg;
var SuperMario;
var MarioAnimation;
var MarioJumpingImg;
var ThankYouMarioImg;
var ThankYouMario;

function preload(){
  //pre-load images
  MarioStageImg = loadImage("Super Mario Bros. World 1 - 1.png");
  MarioAnimation = loadAnimation("Mario Running.gif");
  MarioJumpingImg = loadImage("Super Mario Jumping.jpg");
  ThankYouMarioImg = loadImage("Thank You Mario!.jpg");
}


function setup(){
  createCanvas(displayWidth,displayHeight);
  //create sprites here
  SuperMarioBrosStage = createSprite(450,460,displayWidth,displayHeight);
  //old values for SuperMarioBrosStage createSprite(150,180,300,360);
SuperMarioBrosStage.addImage("LevelBackground",MarioStageImg);
  //SuperMarioBrosStage.x = SuperMarioBrosStage.width /2;
  //SuperMarioBrosStage.velocityX = -3;
  
  SuperMario = createSprite(-100,400);
  SuperMario.addAnimation("MarioRunning",MarioAnimation);
  SuperMario.scale=0.15;
  
  ThankYouMario = createSprite(displayWidth,displayHeight,displayWidth,displayHeight);
  ThankYouMario.addImage("AnotherCastle",ThankYouMarioImg);
  ThankYouMario.scale = 0.68
  ThankYouMario.visible=false;
  
  invisibleGround1 = createSprite(200,826,1000000,10);
  invisibleGround1.visible=false;

  invisibleBoundary1 = createSprite(-164,826,1,400);
  invisibleBoundary1.visible=false;
  
  invisibleBoundary2 = createSprite(1572,826,1,400);
  invisibleBoundary2.visible=false;

  invisibleBoundary3 = createSprite(1600,826,1,400);
  invisibleBoundary3.visible=false;
}

function draw() {
  background("light blue");
  
  /*if (SuperMarioBrosStage.x < 0) {
    SuperMarioBrosStage.x = SuperMarioBrosStage.width /2;
  }*/

  console.log(SuperMario.position.x);
  
  if(keyWentDown("up") && SuperMario.collide(invisibleGround1)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
  }
  
  if(keyWentDown("right")){
    SuperMario.velocityX = SuperMario.velocityX +3;
  }
  
  if(keyWentUp("right")){
    SuperMario.velocityX = 0;
  }
  
  if(keyWentDown("left")){
    SuperMario.velocityX = SuperMario.velocityX -4;
  }
  
  if(keyWentUp("left")){
    SuperMario.velocityX = 0;
  }
  
  SuperMario.velocityY = SuperMario.velocityY + 0.6;
  
  SuperMario.collide(invisibleGround1);
  
  
  SuperMario.collide(invisibleBoundary1);
  
  SuperMario.collide(invisibleBoundary3);

  if(SuperMario.isTouching(invisibleBoundary2)){
    ThankYouMario.visible = true;
    SuperMario.position.x = 1354
    SuperMario.velocityX = 0;
    SuperMario.velocityY = 0;
  }

  camera.position.x = SuperMario.x;
  camera.position.y = SuperMario.y;

  drawSprites();
}

/*function MarioRunning(){
  if(SuperMario.collide(invisibleGround1)){
    SuperMario.addImage("MarioRunning",MarioAnimation);
  }
}*/
