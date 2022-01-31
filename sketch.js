//referenciando modulos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var bola;

var quadrado;

var solo;

function setup() {
	createCanvas(800, 700);

//criando um motor de fisica
	engine = Engine.create();
	//adiciopnando o motor de fisica ao mundo
	world = engine.world;

	//Crie os Corpos Aqui.

var proriedadesdabola={
//adicionando elasticidade
restitution:0.5,

friction:0.02,
frictionAir:0
}

var propriedadesdoquadrado={
	restitution:0.6,

	friction:0.6,
	frictionAir:0
}

var propriedadesdosolo={

isStatic:true

}

//criando o corpo da bola
bola =Bodies.circle(220,10,10,proriedadesdabola)
//adicionando a bola ao mundo
World.add(world,bola);

quadrado=Bodies.rectangle(300,300,50,50,propriedadesdoquadrado);

World.add(world,quadrado);

solo=Bodies.rectangle(0,690,890,50,propriedadesdosolo);

World.add(world,solo);

ellipseMode(RADIUS);

}


function draw() {

  background('black');
// atualizando o motor de fisica

Engine.update(engine);
//desenhar corpo circular

rect(solo.position.x,solo.position.y,890,50);

ellipse(bola.position.x,bola.position.y,10);

rect(quadrado.position.x,quadrado.position.y,50,50);



  rectMode(CENTER);
  


}



