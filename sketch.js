const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg;
var boyImage,boy;
var snowflake
var engine,world;

function preload(){
  bg = loadImage("snow2.jpg")
  boyImage=loadImage("boy2.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  boy=createSprite(200,300,50,50);
  boy.addImage("BOYimg",boyImage);
  boy.scale = 0.5;

  snowflake = new Snow(400,300,100,100)
}

function draw() {
  background(bg);  
  drawSprites();


  snowflake.display();
  Engine.update(engine)
}