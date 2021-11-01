const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  let options={
    isStatic: true
  }
  //create player base body
  playerBase = Bodies.rectangle(250,200,180,150,options);
  World.add(world,playerBase);
  //create player body
  player = Bodies.rectangle(300,playerBase.position.y - 160,50,180,options);
  World.add(world,player);
  playerArcher = Bodies.rectangle(350,player.position.y,30,120,options);
  World.add(world,playerArcher);
  


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  //show the playerbase image using image() function
  image(playerimage,player.position.x,player.position.y,50,180)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
