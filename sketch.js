
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinLeftWall, dustbinRightWall, dustbinBottomWall;
var ground;
var paper;

function preload() {
}

function setup() {
	createCanvas(canvas.width = window.innerWidth, canvas.height = window.innerHeight / 2);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, height - 10, width, 20);

	paper = new Paper(50, 50, 50);

	dustbinLeftWall = new dustbin(984, height - 75.6, 20, height / 3);
	dustbinRightWall = new dustbin(1220, height - 75.6, 20, height / 3);
	dustbinBottomWall = new dustbin(1100, height - 29.9, 250, 20);
	paper = new Paper();


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	ground.display();
	paper.display();
	dustbinLeftWall.display();
	dustbinRightWall.display();
	dustbinBottomWall.display();

	drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position, { x: 320, y: -45 });
    }
}