
function drawGame()
{    
    for(var y = 0; y < mapH; ++y)
    {
        for(var x = 0; x < mapW; ++x)
        {
            switch(gameMap[((y*mapW)+x)])
            {
                case 0:
                    ctx.rect(x*tileW+mapx,y*tileH+mapy,tileW, tileH)
                    ctx.fillStyle = "black";
            break;
                case 1:
                     ctx.rect(x*tileW+mapx,y*tileH+mapy,tileW, tileH)
                    ctx.fillStyle = "purple";

            break;
                case 2:
                    ctx.rect(x*tileW+mapx,y*tileH+mapy,tileW, tileH)
                    ctx.fillStyle = "red";
            break;
                case 3:
                    ctx.rect(x*tileW,y*tileH,tileW, tileH)
                    ctx.fillStyle = "yellow";
            break;
                case 4:
                     ctx.rect(x*tileW,y*tileH,tileW, tileH)
                    ctx.fillStyle = "blue";
            break;
                case 5:
                     ctx.drawImage(img_stone,x*tileW,y*tileH,32,32)
                    ctx.fillStyle = "transparent";
                     }
            ctx.fillRect(x*tileW+mapx,y*tileH+mapy,tileW, tileH);
        }
    }
}    