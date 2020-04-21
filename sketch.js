const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var Ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200 ,300 ,50 ,100);
    box2 = new Box(200 ,200 ,30 ,30);

    box3 = new Box(300 ,300 ,50 ,100);
    box4 = new Box(300 ,200 ,30 ,30);

    Ground = new ground(200,390,400,5);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    Ground.display();
   
}