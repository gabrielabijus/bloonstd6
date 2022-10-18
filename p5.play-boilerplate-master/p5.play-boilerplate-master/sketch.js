var dataBase;
var background_img;
var gameState = 0;
var form, game, person;


function preload(){

}



function setup() {
  createCanvas(800,400);
      game = new Game();
      game.start()
}

function draw() {
  background(0); 

  

  if(gameState === 1){
    game.play()
  }

  drawSprites();
}