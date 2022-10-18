class Form{
    constructor(){
        this.playButton = createButton("Play");
        this.playButton.position(400,200);


    }

    handlePlayButton(){
        this.playButton.mouseClicked(()=>{
           gameState = 1
        })
    }

    display(){
        this.handlePlayButton()
    }
}