const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var division1, division2, division3, division4, division5, division6, division7, division8;


function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  division1 = new Divisions(4, 652, 10, 300);
  division2 = new Divisions(72, 652, 10, 300);
  division3 = new Divisions(140, 652, 10, 300);
  division4 = new Divisions(208, 652, 10, 300);
  division5 = new Divisions(276, 652, 10, 300);
  division6 = new Divisions(344, 652, 10, 300);
  division7 = new Divisions(412, 652, 10, 300);
  division8 = new Divisions(476, 652, 10, 300);

  for (var j = 40; j <= width; j = j + 50)
{
  plinkos.push(new Plinko(j, 75));
}

for (var j = 15; j <= width - 10; j = j+50)
{
  plinkos.push(new Plinko(j, 175)); 
}

}
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300; 



function draw() {
  background("black");  
  Engine.update(engine);

  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j, 75));
  }
  
  for (var j = 15; j <= width - 10; j = j+50)
  {
    plinkos.push(new Plinko(j, 175)); 
  }

  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
}


