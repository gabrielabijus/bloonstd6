var dataBase;
var background_img;
var gameState = 0;
var form, game, person;
var pathImg, path1, path2, path3, path4, path5, path6, path7, path8, path9, path10, path11, path12;
var witch;
var soldier;
var hunter;
var ballonGroup, pathsGroup;


function preload(){
  background_img = loadImage("imagens/grass.gif");
  pathImg = loadImage("imagens/path.gif");
  

  

}



function setup() {
  createCanvas(800,400);
      game = new Game();
      game.start()
}

function draw() {
  background(background_img); 

  if (gameState === 0){

    fill("black");
    textSize(35);
    text("Magic Fight", 330, 100);
  }

  if(gameState === 1){
    game.play()
      
    drawSprites();

    
  }



}