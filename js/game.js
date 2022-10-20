class Game{
    constructor(){

       
    }
    



    start() {
        person = new Person();

        form = new Form()
        form.display();
        pathsGroup = new Group();
        ballonGroup = new Group();
        // tudo o que precisa ser carregado antes do jogo vem aqui 
        path1  = createSprite(200,200,30,30)
        path1.addImage(pathImg);
        pathsGroup.add(path1)

        path2 = createSprite(230,250,30,30);
        path2.addImage(pathImg);
        path2.rotation = 90
        pathsGroup.add(path2)
        
       
        

        this.addBalloons(10)
               
    }
    
    // você pode determinar a quantidade de balões conforme o nivel da fase (controlar o nivel com gameState)
    addBalloons(numberOfBallons){
        for(var i = 0; i < numberOfBallons ; i++){
            var ballon = createSprite( 200, 200, 30,30);
            ballon.shapeColor = "red";
            ballonGroup.add(ballon);
            console.log("teste")
        }
    }


    play() {
       // console.log("game play")
        form.playButton.hide()
        ballonGroup.bounceOff(pathsGroup)

            
    }
 
    
}