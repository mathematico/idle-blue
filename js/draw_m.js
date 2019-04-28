function drawGame()
{    
    ctx.clearRect(400*Sc, 0, 640*Sc , 640*Sc)
    for(var y = 0; y < mapH; ++y)
    {
        for(var x = 0; x < mapW; ++x)
        {
            switch(gameMap[((y*mapW)+x)])
            {
                case 0:
                    //ctx.rect(x*tileW+mapx,y*tileH+mapy,tileW, tileH)
                    ctx.fillStyle = "black";
            break;
                case 1:
                     //ctx.rect(x*tileW+mapx,y*tileH+mapy,tileW, tileH)
                    ctx.fillStyle = "red";

            break;
                case 2:
                    //ctx.rect(x*tileW+mapx,y*tileH+mapy,tileW, tileH)
                    ctx.fillStyle = "purple";
            break;
                case 3:
                    //ctx.rect(x*tileW,y*tileH,tileW, tileH)
                    ctx.fillStyle = "yellow";
            break;
                case 4:
                     //ctx.rect(x*tileW,y*tileH,tileW, tileH)
                    ctx.fillStyle = "blue";
            break;
                case 5:
                    // ctx.drawImage(img_stone,x*tileW,y*tileH,32,32)
                    ctx.fillStyle = "pink";
                     }
            ctx.fillRect(x*tileW+mapx,y*tileH+mapy,tileW, tileH);
        }
    }
}
function drawText()
{
    
    ctx.clearRect(0, 0, 200*Sc , 120*Sc)
    ctx.font = font;
    ctx.fillStyle = "#ff0000" 
    ctx.fillText("Health  " + S_health + " / " + S_healthmax, 10, 20)
    ctx.fillStyle = "black"
    ctx.fillText("Damage  " + S_damage, 10, 40)
   
}
function drawFText(){
    ctx.clearRect(200*Sc, 0, 200*Sc , 120*Sc)
    if (infight == true){
    ctx.clearRect(200*Sc, 0, 200*Sc , 120*Sc)
    ctx.font = font;
    ctx.fillStyle = "#ff0000" 
    ctx.fillText("EnemmyHealth  " + e_health + " / " + e_healthmax, 200*Sc, 20)
    ctx.fillStyle = "black"
    ctx.fillText("Damage  " + e_damage, 200*Sc, 40)
    }
}