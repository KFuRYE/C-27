
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof = new Roof(width/2, height/4, width/4 , 20);

	ball1 = new Ball(width/2 - 80,height/4 +500, 40);
	ball2 = new Ball(width/2 - 40,height/4 +500, 40);
	ball3 = new Ball(width/2 ,height/4 +500, 40);
	ball4 = new Ball(width/2 + 80,height/4 +500, 40);
	ball5 = new Ball(width/2 + 40,height/4 +500, 40);

	rope1= new Rope(ball1.body, roof.body, -80, 0);
	rope2= new Rope(ball2.body, roof.body, -40, 0);
	rope3= new Rope(ball3.body, roof.body, 0, 0);
	rope4= new Rope(ball4.body, roof.body, +80, 0);
	rope5= new Rope(ball5.body, roof.body, +40, 0);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed()  {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-20,y:-20});
	}
}


