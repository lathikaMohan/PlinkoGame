const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;


var particles = [];
var plinkos = [];
var divisions =[];


var engine, world;
var ground;

var divisionHeight = 300;



function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

//Plinkos
  for (var j = 40; j <=width;  j= j + 50) {
    plinkos.push(new Plinko(j,75));

  }

  for (var j = 15; j <=width-10;  j= j + 50) {
    plinkos.push(new Plinko(j,175));

  }


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();

  for (var k = 0; k <divisions.length; k = k+1) {

    divisions[k].display();
  }
//PLINKO DISPLAY
for (var i = 0; i <plinkos.length; i = i+1) {

  plinkos[i].display();
}


//Particle
if(frameCount % 90 === 0){

  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
}
for (var j = 0; j <particles.length; j = j+1) {

  particles[j].display();
}
  drawSprites();
}