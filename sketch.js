var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball,box1,box2,box3,ball,slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
   
	box1=new Box(700,595,90,80);
 box2=new Box(650,595,10,80);
 box3=new Box(750,595,10,80);
 ball=Bodies.circle(200,200,50,options);
	World.add(world, ball);
 slingshot = new Launcher(ball,{x:200, y:200});
 var options={
	 isStatic:false,
	 restitution:0.3 ,
	 friction :0.5,
	 density:1.3
 }
	
	//Create a Ground
	fill("ball/ball1.png");
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} )
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  box1.display();
  box2.display();
  box3.display();
  
  slingshot.display();
 

  drawSprites(); 
  }
  

 
  function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
        slingshot.fly();
        
    }
