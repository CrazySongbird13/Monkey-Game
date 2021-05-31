var survivalTime = 0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var bananaGroup;
var ground;


function preload(){

  
  monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("sprite_2.png");
  
 
}



function setup() {

  ground = createSprite(100,345,900,10);
  
  monkey = createSprite(80, 315, 20, 20);

 obstaclesGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
  createCanvas(600,350);
  
 
  //creating the monkey

  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  if(keyDown)
    
  //creating the ground

  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
 


  monkey.collide(ground);
  createObstacles();
  Food();
  
  stroke("black");
  textSize(20);
  fill("black");
  suvivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100, 50);
  
  //make the monkey jump
  if(keyDown("space") && monkey.y < 315) {
    monkey.velocityY = -15.5;
  }
  //add gravity 
  monkey.velocityY = monkey.velocityY + 0.8;

  drawSprites();
}

function Food(){
  
   //creating the bananas
  if(frameCount % 80 === 0) {
    banana = createSprite(350,200,10,10);
    banana.y = Math.round(random(200,120));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -4;
    banana.lifetime = 85;
    bananaGroup.add(banana);
  }
}

function createObstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(350,317,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacle.lifetime = 62;
    obstaclesGroup.add(obstacle);
  }
  
}


