
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
 paper1=new Paper(200,330,25,25);
dustbin1=new Dustbin(600,330,20,170);
dustbin2=new Dustbin(750,330,20,170);

dustbin3=new Dustbin(675,380,180,20);

ground=new Ground(600,height,1200,20)

}


function draw() {
  rectMode(CENTER);
  background(255);
 
 Engine.update(engine)
  paper1.display()

dustbin1.display()

dustbin2.display()

dustbin3.display()
  
 ground.display()
}
function keyPressed(){
    if (keyCode===UP_ARROW){
    
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-30})
    }
    }

