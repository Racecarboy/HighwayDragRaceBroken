var SuperMarioBrosStage;
var MarioStageImg;
var SuperMario;
var MarioAnimation;
var MarioJumpingImg;
var ThankYouMarioImg;
var ThankYouMario;
var MarioJumpingSound;
var MarioGameOver;
var MarioGameOverImg;
var MarioGameOverSound;
var ThankYouMarioSound;
var StageSound;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10,stone11,stone12,stone13,stone14,stone15,stone16,stone17,stone18,stone19,stone20,stone21,stone22,stone23,stone24,stone25,stone26;

function preload(){
  //pre-load images
  MarioStageImg = loadImage("Super Mario Bros. World 1 - 1.png");
  MarioAnimation = loadAnimation("Mario Running.gif");
  MarioJumpingImg = loadImage("Super Mario Jumping.jpg");
  ThankYouMarioImg = loadImage("Thank You Mario!.jpg");
  ThankYouMarioSound = loadSound('smb_world_clear.wav');
  MarioGameOverImg = loadImage('Mario Game Over.png')
  MarioGameOverSound = loadSound('smb_mariodie.wav');
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

  MarioGameOver = createSprite(displayWidth,displayHeight,displayWidth,displayHeight);
  MarioGameOver.addImage("GameOver",MarioGameOverImg);
  MarioGameOver.scale = 1.1
  MarioGameOver.visible=false;
  
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

  stone1 = createSprite(798,810,10,5);
  stone1.setCollider("rectangle",0,0,10,10);
  stone1.visible=false;
  //stone1.debug=true;

  stone2 = createSprite(809.5,810,10,20);
  stone2.setCollider("rectangle",0,0,10,25);
  stone2.visible=false;
  //stone2.debug=true;

  stone3 = createSprite(821,810,10,35);
  stone3.setCollider("rectangle",0,0,10,45);
  stone3.visible=false;
  //stone3.debug=true;

  stone4 = createSprite(832.5,810,10,55);
  stone4.setCollider("rectangle",0,0,10,65);
  stone4.visible=false;
  //stone4.debug=true;

  stone5 = createSprite(870.5,810,10,55);
  stone5.setCollider("rectangle",0,0,10,65);
  stone5.visible=false;
  //stone5.debug=true;

  stone6 = createSprite(882,810,10,35);
  stone6.setCollider("rectangle",0,0,10,45);
  stone6.visible=false;
  //stone6.debug=true;

  stone7 = createSprite(893.5,810,10,20);
  stone7.setCollider("rectangle",0,0,10,25);
  stone7.visible=false;
  //stone7.debug=true;

  stone8 = createSprite(905,810,10,5);
  stone8.setCollider("rectangle",0,0,10,10);
  stone8.visible=false;
  //stone8.debug=true;

  stone9 = createSprite(967,810,10,5);
  stone9.setCollider("rectangle",0,0,10,10);
  stone9.visible=false;
  //stone9.debug=true;

  stone10 = createSprite(978.5,810,10,20);
  stone10.setCollider("rectangle",0,0,10,25);
  stone10.visible=false;
  //stone10.debug=true;

  stone11 = createSprite(990,810,10,35);
  stone11.setCollider("rectangle",0,0,10,45);
  stone11.visible=false;
  //stone11.debug=true;

  stone12 = createSprite(1001.5,810,10,55);
  stone12.setCollider("rectangle",0,0,10,65);
  stone12.visible=false;
  //stone12.debug=true;

  stone13 = createSprite(1013,810,10,55);
  stone13.setCollider("rectangle",0,0,10,65);
  stone13.visible=false;
  //stone13.debug=true;

  stone14 = createSprite(1051,810,10,55);
  stone14.setCollider("rectangle",0,0,10,65);
  stone14.visible=false;
  //stone14.debug=true;

  stone15 = createSprite(1062.5,810,10,35);
  stone15.setCollider("rectangle",0,0,10,45);
  stone15.visible=false;
  //stone15.debug=true;

  stone16 = createSprite(1074,810,10,20);
  stone16.setCollider("rectangle",0,0,10,25);
  stone16.visible=false;
  //stone16.debug=true;

  stone17 = createSprite(1085.5,810,10,5);
  stone17.setCollider("rectangle",0,0,10,10);
  stone17.visible=false;
  //stone17.debug=true;

  stone18 = createSprite(1366,810,10,5);
  stone18.setCollider("rectangle",0,0,10,10);
  stone18.visible=false;
  //stone18.debug=true;

  stone19 = createSprite(1377.5,810,10,5);
  stone19.setCollider("rectangle",0,0,10,10);
  stone19.visible=false;
  //stone19.debug=true;

  stone20 = createSprite(1389.5,810,10,30);
  stone20.setCollider("rectangle",0,0,10,50);
  stone20.visible=false;
  //stone20.debug=true;

  stone21 = createSprite(1401.5,810,10,55);
  stone21.setCollider("rectangle",0,0,10,70);
  stone21.visible=false;
  //stone21.debug=true;

  stone22 = createSprite(1413.5,810,10,75);
  stone22.setCollider("rectangle",0,0,10,90);
  stone22.visible=false;
  //stone22.debug=true;

  stone23 = createSprite(1425.5,810,10,90);
  stone23.setCollider("rectangle",0,0,10,120);
  stone23.visible=false;
  //stone23.debug=true;

  stone24 = createSprite(1437.5,810,10,55);
  stone24.setCollider("rectangle",0,0,10,140);
  stone24.visible=false;
  //stone24.debug=true;

  stone25 = createSprite(1449.5,810,10,75);
  stone25.setCollider("rectangle",0,0,10,150);
  stone25.visible=false;
  //stone25.debug=true;

  stone26 = createSprite(1461.5,810,10,90);
  stone26.setCollider("rectangle",0,0,10,170);
  stone26.visible=false;
  //stone26.debug=true;


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

  if(keyWentDown("up") && SuperMario.collide(stone1)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone2)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone3)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone4)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone5)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone6)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone7)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone8)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone9)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone10)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone11)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone12)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone13)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone14)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone15)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone16)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone17)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone18)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone19)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone20)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone21)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone22)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone23)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone24)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone25)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("up") && SuperMario.collide(stone26)){
    SuperMario.velocityY = -9;
    SuperMario.changeImage("MarioJumping",MarioJumpingImg);
    MarioJumpingSound.play();
  }

  if(keyWentDown("right")){
    SuperMario.velocityX = SuperMario.velocityX +4;
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
  SuperMario.collide(stone2);
  SuperMario.collide(stone3);
  SuperMario.collide(stone4);
  SuperMario.collide(stone5);
  SuperMario.collide(stone6);
  SuperMario.collide(stone7);
  SuperMario.collide(stone8);
  SuperMario.collide(stone9);
  SuperMario.collide(stone10);
  SuperMario.collide(stone11);
  SuperMario.collide(stone12);
  SuperMario.collide(stone13);
  SuperMario.collide(stone14);
  SuperMario.collide(stone15);
  SuperMario.collide(stone16);
  SuperMario.collide(stone17);
  SuperMario.collide(stone18);
  SuperMario.collide(stone19);
  SuperMario.collide(stone20);
  SuperMario.collide(stone21);
  SuperMario.collide(stone22);
  SuperMario.collide(stone23);
  SuperMario.collide(stone24);
  SuperMario.collide(stone25);
  SuperMario.collide(stone26);

  if(SuperMario.isTouching(invisibleBoundary2)){
    ThankYouMario.visible = true;
    SuperMario.position.x = 1354
    SuperMario.velocityX = 0;
    SuperMario.velocityY = 0;
    ThankYouMarioSound.play();
    MarioJumpingSound.stop();
    StageSound.stop();
  }


  if(SuperMario.position.y > 900){
    MarioGameOverSound.play();
    MarioGameOver.visible = true;
    SuperMario.position.x = 1354;
    SuperMario.position.y = 809;
    SuperMario.velocityX = 0;
    SuperMario.velocityY = 0;
    MarioJumpingSound.stop();
    StageSound.stop();
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