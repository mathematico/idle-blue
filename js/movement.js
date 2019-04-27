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
   
    
    pcase = pposx + pposy * mapH
    gameMap[pcase] = 0
    if(upPressed == true && gameMap[pcase - mapH] == 0 ){
        
    pposy -= 1  
    }
    else if(downPressed == true && gameMap[pcase + mapH] == 0){
    pposy += 1
    }
    else if (rightPressed == true && gameMap[pcase + 1] == 0){
    pposx += 1    
    }
    else if (leftPressed == true && gameMap[pcase - 1]  == 0){
    pposx -= 1    
    }
     console.log(pposx)
     console.log(pposy)
    pcase = pposx + pposy * mapH
    
    gameMap[pcase] = 2
}