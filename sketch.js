
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperimg;
var radius=60;
function preload(){
paperimg=loadImage("paper.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	paper=Bodies.circle(310,100,radius/2.6,ball_options);
	World.add(world,paper);
	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1300,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  imageMode(CENTER)
  image(paperimg,paper.position.x,paper.position.y,radius,radius)
}
function keyPressed() {
  
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper,paper.position,{x:120,y:-145});






	}





}
