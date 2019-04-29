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
                     
            break;
                case 6:
                    // ctx.drawImage(img_stone,x*tileW,y*tileH,32,32)
                    ctx.fillStyle = "brown";
                     }
            ctx.fillRect(x*tileW+mapx,y*tileH+mapy,tileW, tileH);
        }
    }
}
function drawText()
{
    
    ctx.clearRect(0, 0, 200*Sc , 540*Sc)
    ctx.font = font;
    ctx.fillStyle = "blue" 
    ctx.fillText("Zone " + zone, 10, 20)
    ctx.fillStyle = "#ff0000" 
    ctx.fillText("Health  " + S_health + " / " + S_healthmax, 10, 40)
    ctx.fillStyle = "black"
    ctx.fillText("Damage  " + S_damage, 10, 60)
    if (scrapamount>0){
    ctx.fillStyle = "black"
    ctx.fillText("Scrap  " + scrapamount, 10, 320)    
    }
    if (tcamount>0){
    ctx.fillStyle = "black"
    ctx.fillText("temportal currency" + tcamount, 10, 440)    
    }             
}
function drawFText(){
    ctx.clearRect(200*Sc, 0, 200*Sc , 540*Sc)
    if (infight == true){
    ctx.clearRect(200*Sc, 0, 200*Sc , 540*Sc)
    ctx.font = font;
    ctx.fillStyle = "#ff0000" 
    ctx.fillText("Enemy Health  " + e_health + " / " + e_healthmax, 200*Sc, 40)
    ctx.fillStyle = "black"
    ctx.fillText("Damage  " + e_damage, 200*Sc, 60)
        if (inbossfight==true){
            ctx.fillStyle = "black"
            ctx.fillText("boss", 200*Sc, 20)
        }else{
            ctx.fillStyle = "black"
            ctx.fillText("enemy", 200*Sc, 20)
        }
        
    }
}