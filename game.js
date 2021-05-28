class Game{
    constructor(){}
    getState(){var gameStateRef=database.ref("gametate")
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })
}
update(state){
    database.ref("/").update({
        gamState:state
    })
}
start(){
    if(gameState===0){form=new Form()
    form.display()}
}
}