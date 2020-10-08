
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld, ground ;

var box1 , box2 , box3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	myengine = Engine.create();
    myworld = myengine.world;
	 
	

	//Create the Bodies Here.
	box1 = new Box(1000,635,200,20);
	box2 = new Box(900,585,20,130);
	box3 = new Box(1100,585,20,130);
    
	ground = new Ground(700,650,1400,10);

	ball = new Ball(200,600);
	
	Engine.run(myengine);
  
}


function draw() {
 
  background("pink");
  
  Engine.update(myengine);

  

  box1.display();
  box2.display();
  box3.display();

  ground.display();

  ball.display();


  console.log(ball.x);

}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body, ball.body.position , {x:150, y:-150});

}


}

