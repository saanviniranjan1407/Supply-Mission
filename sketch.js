var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	
	//doubt
	packageSprite = createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	//doubt
	helicopterSprite = createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	//doubt
	groundSprite = createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	//doubt
	world = engine.world;

	//doubt
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);	

	//Create a Ground
	//doubt
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  //doubt
  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y; 
  drawSprites(); 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false); 
    packageSprite.velocityY = 3; 
  }
}