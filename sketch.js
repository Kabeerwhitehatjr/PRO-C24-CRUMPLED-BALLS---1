
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbin1, dustbin2, dustbin3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperObject = new paper(100,580,50,50);




	ground = createSprite(400,650,800,20);
	ground.shapeColor=color('Yellow');

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 	
	dustbin1 = new dustbin(500, 580, 20,  100);
	dustbin2 = new dustbin(600, 630, 200, 20);
	dustbin3 = new dustbin(700, 580, 20,  100);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:385,y:-385}); 
	}
}


