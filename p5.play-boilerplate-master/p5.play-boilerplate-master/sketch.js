var dataBase;
var background_img;
var gameState = 0;
var form, game, player;
var ballon
var ballonGroup;
var person;
var persons;
var person1, person2, person3;
var personGroup;



function preload(){

}





function setup() {
  createCanvas(800,400);
    dataBase = firebase.database();
      game = new Game();
      game.getState();
      game.start();

}

function draw() {
  background(background_img); 

  drawSprites();
}