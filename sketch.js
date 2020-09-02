
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,bullet,bar,launcher;
var score;

//bottom row
var box1,box2,box3,box4,box5,box6,box7,box8;

//2nd from bottom
var box9,box10,box11,box12,box13,box14,box15;

//
var box16,box17,box18,box19,box20,box21;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,695,800,20);
	bullet = new Shooter(200,400);
	bar = new Ground(550,500,150,5);

	//bottom row
	box1 = new Box(510,490,10,30);
	box2 = new Box(520,490,10,30);
	box3 = new Box(530,490,10,30);
	box4 = new Box(540,490,10,30);
	box5 = new Box(550,490,10,30);
	box6 = new Box(560,490,10,30);
	box7 = new Box(570,490,10,30);
	box8 = new Box(580,490,10,30);

	//2nd from bottom row
	box9 = new Box(515,450,10,30);
	box10 = new Box(525,450,10,30);
	box11 = new Box(535,450,10,30);
	box12 = new Box(545,450,10,30);
	box13 = new Box(555,450,10,30);
	box14 = new Box(565,450,10,30);
	box15 = new Box(575,450,10,30);

	//top row
	box16 = new Box(520,410,10,30);
	box17 = new Box(530,410,10,30);
	box18 = new Box(540,410,10,30);
	box19 = new Box(550,410,10,30);
	box20 = new Box(560,410,10,30);
  box21 = new Box(570,410,10,30);		
  
  score =0;

	launcher = new SlingShot(bullet.body,{x:200,y:400});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  textSize(25);
  fill(255);
  text(score,100,200);

  ground.display();
  bullet.display();
  bar.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();

  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();

  launcher.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bullet.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(bullet.body,{x:200,y:400})
       launcher.attach(bullet.body);
    }
}