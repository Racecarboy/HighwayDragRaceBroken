var canvas;
var backgroundImage, R34Img, SilviaImg, track;
// car1 is Nissan GTR R34 and car2 is Nissan Silvia RocketBunny
var fuelImage, powerCoinImage, lifeImage;
var M3GTRImg, PorscheImg, AE86Img;
// obstacle1 is the BMW M3 GTR and obstacle2 is the Porsche
var database, gameState;
var form, player, playerCount;
var allPlayers, R34, Silvia, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  R34Img = loadImage("../assets/Nissan GTR R34 Pixel Car Racer (2).jpg");
  SilviaImg = loadImage("../assets/Nissan Silvia RocketBunny.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  M3GTRImg = loadImage("./assets/Need For Speed Most Wanted 2005 BMW M3 GTR Iconic Car Replica Pixel Car Racer (2).jpg");
  PorscheImg = loadImage("./assets/Pixel Car Racer Porsche (2).jpg");
  AE86Img = loadImage("./assets/Toyota ae86 Pixel Car Racer (3).png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}
