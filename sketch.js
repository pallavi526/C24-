const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  angle = -PI / 4;

let engine;
let world;

var cannon;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

    cannon = new Cannon(180, 110, 110, 50, angle);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
    cannon.display();

 
}

