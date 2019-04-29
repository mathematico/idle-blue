var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
}

function keyUpHandler(e) {
    console.log(e.key)
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
}

function movement(){
    if (infight==true){
        
    }
        
    else if(infight==false && mmenu==true){
    pcase = pposx + pposy * mapH
    gameMap[pcase] = 0
    if(upPressed == true && pposy - 1 >=0 ){
        if(gameMap[pcase - mapH] == 0){
            pposy -= 1  
            
        }else{
            encounter(gameMap[pcase - mapH])
            pposy -= 1
        }
            
    
    }

    else if(downPressed == true && pposy + 2 <=mapH ){
        if(gameMap[pcase + mapH] == 0){
            pposy += 1  
        }else{
            encounter(gameMap[pcase + mapH])
            pposy += 1
        }
         
    
    }
    
    else if(rightPressed == true && pposx +2 <=mapW ){
        if(gameMap[pcase + 1] == 0){
            pposx += 1  
        }else{
            encounter(gameMap[pcase + 1])
            pposx += 1
        }
         
    
    }
    else if(leftPressed == true && pposx - 1 >=0 ){
        if(gameMap[pcase - 1] == 0){
            pposx -= 1  
        }else{
            encounter(gameMap[pcase - 1])
            pposx -= 1
        }
         
    
    }
    

    pcase = pposx + pposy * mapH
    
    gameMap[pcase] = 1
    }
}