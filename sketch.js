const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var p1,cpu,cbase,pbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  cbase = new ComputerBase(width*(4/5),(height/2) + 190,400,400);
  pbase = new PlayerBase(width/5,(height/2) + 190,400,400);
  p1 = new Player(width/5,(height/2) - 100,100,300);
  cpu = new Computer(width*(4/5),(height/2)-100,100,300);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  cbase.display();
  pbase.display();
   //display Player and computerplayer
  p1.display();
  cpu.display();
}
