const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var motor, mundo, bola;

function setup() {
  createCanvas(400, 400);
  motor = Engine.create();
  mundo = motor.world;

  var bola_opcoes = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  bola = Bodies.circle(150, 10, 20, bola_opcoes);
  World.add(mundo,bola);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("pink");
  ellipse(bola.position.x, bola.position.y, 20);
 Engine.update(motor);
  
}

