//creates variables
var helicopterIMG, helicopterSprite, packageSprite, packageIMG, packageBody, ground,r1,r2,r3,rb;

//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	//loads the images
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	//creates a canvas
	createCanvas(800, 700);

	//adds rectangle to centre
	rectMode(CENTER);

	//creates a package and its properties
	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	//creates a helicopter and its properties
	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	//creates a ground and its properties
	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	//creates a engine with world auto added
	engine = Engine.create();
	world = engine.world;

	//creates a package and its body and adds to the world
	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.5, isStatic: true });
	World.add(world, packageBody);

	//Create a Groundand its body and adds to the world
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);
	
    //runs the engine
	Engine.run(engine);

	r1 = new Ra(400,655,210,12);
	r2 = new Ra(500,620,12,100);
	r3 = new Ra(300,620,12,100);
}


function draw() {
	//adds rectangle to centre
	rectMode(CENTER);

	//creates a background
	background(0);

	//sets package position
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	
	r1.display();
	r2.display();
	r3.display();

	//draws all the sprites
	drawSprites();

	//calls the function
	keyPressed();
}

function keyPressed() {
	//drops the package
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
	}
}