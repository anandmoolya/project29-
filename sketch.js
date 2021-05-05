const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ball,ground;
var madhur1,madhur2;
var ball;
var slingShot;


function preload(){

}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  madhur1 = new Stand(380,300,270,10);
  madhur2 = new Stand(700,200,200,10);
  miss1 = new Block(280,275,30,40);  
  miss2 = new Block(310,275,30,40);
  miss3 = new Block(340,275,30,40);
  miss4 = new Block(370,275,30,40);
  miss5 = new Block(400,275,30,40);
  miss6 = new Block(430,275,30,40);
  miss7 = new Block(460,275,30,40);
  miss8 = new Block(490,275,30,40);
  miss9 = new Block(310,235,30,40);
  miss10 = new Block(340,235,30,40);
  miss11 = new Block(370,235,30,40);
  miss12 = new Block(400,235,30,40);
  miss13 = new Block(430,235,30,40);
  miss14 = new Block(460,235,30,40);
  miss15 = new Block(340,195,30,40);
  miss16 = new Block(370,195,30,40);
  miss17 = new Block(400,195,30,40);
  miss18 = new Block(430,195,30,40); 
  miss19 = new Block(370,155,30,40);
  miss20 = new Block(400,155,30,40);
  miss21 = new Block(385,115,30,40);
  misss1 = new Block(640,175,30,40);
  misss2 = new Block(670,175,30,40);
  misss3 = new Block(700,175,30,40);
  misss4 = new Block(730,175,30,40);
  misss5 = new Block(760,175,30,40);
  misss6 = new Block(670,135,30,40);
  misss7 = new Block(700,135,30,40);
  misss8 = new Block(730,135,30,40);
  misss9 = new Block(700,95,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() { 
 background("white")
  Engine.update(engine);
 
  
 
  strokeWeight(2);
  stroke(15);
  
  madhur1.display();
  madhur2.display();
  
  stroke(15);
  fill("red")
  miss1.display();
  miss2.display();
  miss3.display();
  miss4.display();
  miss5.display();
  miss6.display();
  miss7.display();
  miss8.display();
  stroke(15)
  fill("lightpink")
  miss9.display();
  miss10.display();
  miss11.display();
  miss12.display();
  miss13.display();
  miss14.display();
 stroke(15)
 fill("violet")
 miss15.display();
 miss16.display();
 miss17.display();
 miss18.display();
    stroke(15)
    fill("lightgreen")
    miss19.display();
    miss20.display();
 stroke(15)
 fill("lightblue")
 miss21.display();

  stroke(15)
  fill("red")
  misss1.display();
  misss2.display();
  misss3.display();
  misss4.display();
  misss5.display();
  stroke(15)
  fill("lightyellow")
  misss6.display();
  misss7.display();
  misss8.display();
  stroke(15)
  fill("lightpink")
  misss9.display();
  text("this game code is made by madhur ",600,350)
 
  ellipse(ball.position.x,ball.position.y,20);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
