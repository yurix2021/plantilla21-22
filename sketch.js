const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//crear los cuerpos aquí
	

	groundObj= //completar
	leftSide = //completar
	rightSide = //completar

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  //completar
  //completar
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

	//Escribe el código para aplicar fuerza en el cuerpo de pelota-ball	
    
  	}
}
