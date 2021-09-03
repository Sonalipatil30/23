const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
bobObject1=new bob (340,470,20);
bobObject2=new bob (380,470,20);
bobObject3=new bob (420,470,20);
bobObject4=new bob (460,470,20);
bobObject5=new bob (500,470,20);
rope1=new rope(bobObject1.Body,roof.Body,-40*2,0);
rope2=new rope(bobObject2.Body,roof.Body,-20*2,0);
rope3=new rope(bobObject3.Body,roof.Body,-00*2,0);
rope4=new rope(bobObject4.Body,roof.Body,-20*2,0);
rope5=new rope(bobObject5.Body,roof.Body,-40*2,0);
Engine.run(engine);

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  //create ellipse shape for multiple bobs here
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keycode===up_arrow){
		matter.Body.applyforce(bobObject1.Body,bobObject1.Body.position,{x:-50,y:-45});
	}
}