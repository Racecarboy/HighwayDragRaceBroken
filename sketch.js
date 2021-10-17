var SuperMarioBrosStage;
var MarioStageImg;
var SuperMario;
var MarioAnimation;
var MarioJumpingImg;
var ThankYouMarioImg;
var ThankYouMario;
var ThankYouMarioSound;
var MarioJumpingSound;
var StageSound;

function preload(){
  //pre-load images
  MarioStageImg = loadImage("Super Mario Bros. World 1 - 1.png");
  MarioAnimation = loadAnimation("Mario Running.gif");
  MarioJumpingImg = loadImage("Super Mario Jumping.jpg");
  ThankYouMarioImg = loadImage("Thank You Mario!.jpg");
  ThankYouMarioSound = loadSound('sm64_mario_thank_you.wav');
  MarioJumpingSound = loadSound('maro-jump-sound-effect_1.mp3');
  StageSound = loadSound('21 Breezy Mushrise Park.mp3');
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
  SuperMario.debug=true;
  SuperMario.setCollider('circle',0,20,60)
  
  ThankYouMario = createSprite(displayWidth,displayHeight,displayWidth,displayHeight);
  ThankYouMario.addImage("AnotherCastle",ThankYouMarioImg);
  ThankYouMario.scale = 0.68
  ThankYouMario.visible=false;
  
  //invisibleGround1 = createSprite(-100,826,10000,10);
  invisibleGround1 = createSprite(-100,826,190,10);
  invisibleGround1.visible=false;

  invisibleGround2 = createSprite(115,826,170.5,10);
  invisibleGround2.visible=false;

  invisibleGround3 = createSprite(632,826,756,10);
  invisibleGround3.visible=false;

  invisibleGround4 = createSprite(1358,826,600,10);
  invisibleGround4.visible=false;

  invisibleBoundary1 = createSprite(-164,826,1,400);
  invisibleBoundary1.visible=false;
  
  invisibleBoundary2 = createSprite(1572,826,1,400);
  invisibleBoundary2.visible=false;

  invisibleBoundary3 = createSprite(1600,826,1,400);
  invisibleBoundary3.visible=false;

  stone1 = createSprite(798,810,5,5);
  stone1.visible=false;

  StageSound.play();
}

function draw() {
  background("black");
  
  /*if (SuperMarioBrosStage.x < 0) {
    SuperMarioBrosStage.x = SuperMarioBrosStage.width /2;
  }*/

  console.log(SuperMario.position.x);
  console.log(SuperMario.position.y);
  
  if(keyWentDown("up") && SuperMario.collide(invisibleGround1)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(invisibleGround2)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(invisibleGround3)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(invisibleGround4)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
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
  SuperMario.collide(invisibleGround2);
  SuperMario.collide(invisibleGround3);
  SuperMario.collide(invisibleGround4);
  SuperMario.collide(invisibleBoundary1);
  SuperMario.collide(invisibleBoundary3);

  SuperMario.collide(stone1);

  if(SuperMario.isTouching(invisibleBoundary2)){
    ThankYouMario.visible = true;
    SuperMario.position.x = 1354
    SuperMario.velocityX = 0;
    SuperMario.velocityY = 0;
    ThankYouMario.play();
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
