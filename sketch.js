
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 390, 1200, 10);
	paper = new Paper(100, 380, 10, 10);

	bottom = createSprite(1000,375,200,20);
	bottom.shapeColor = color(255,0,0);

	side1 = createSprite(900,335,20,100);
	side1.shapeColor = color(255,0,0);

	side2 = createSprite(1100,335,20,100);
	side2.shapeColor = color(255,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 150, y: -150});
	}
}