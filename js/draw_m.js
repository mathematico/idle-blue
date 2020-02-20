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

            break;
                case 7:
                    // ctx.drawImage(img_stone,x*tileW,y*tileH,32,32)
                    ctx.fillStyle = "dimgray";
            break;
                case 8:
                    // ctx.drawImage(img_stone,x*tileW,y*tileH,32,32)
                    ctx.fillStyle = "maroon";
            break;
                case 9:
                    // ctx.drawImage(img_stone,x*tileW,y*tileH,32,32)
                    ctx.fillStyle = "cyan";
                     }
            ctx.fillRect(x*tileW+mapx,y*tileH+mapy,tileW, tileH);
        }
    }
}
function drawText()
{
    var statT ="Health: " + S_health + " / " + S_healthmax
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
    statT= statT+ " Scrap : " + scrapamount
    }
    if (tcamount>0){
    ctx.fillStyle = "black"
    ctx.fillText("temportal currency" + tcamount, 10, 440)
    statT= statT+ "temportal currency" + tcamount
    }
    if (scraparmorupgrade==true || scraparmor>0){
    ctx.fillStyle = "brown"
    ctx.fillText("Scraparmor "+scraparmor, 10, 80)
    statT= statT+ "Scraparmor "+scraparmor
    }
     if (S_shieldregen>0){
    ctx.fillStyle = "cyan"
    ctx.fillText("Shield  " + S_shield + " / " + S_shieldmax, 10, 100)
    ctx.fillText("Shieldregen " + S_shieldregen * 10 + "/s", 10, 120)
    statT= statT+ "Shield  " + S_shield + " / " + S_shieldmax + "Shieldregen " + S_shieldregen * 10 + "/s"
    }
    document.getElementById("stat").innerHTML=statT
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
function drawTooltip(){
    if (infight== false){
        mouseType=gameMap[mouseCase]
        if (mouseType == 0){
            ctx.fillStyle = "black"
            ctx.fillText("Space void...", 200*Sc, 20)

        }else if(mouseType==1){
            ctx.fillStyle = "black"
            ctx.fillText("Your ship captain", 200*Sc, 20)

        }else if(mouseType==2){
            ctx.fillStyle = "black"
            ctx.fillText("Hostile enemy", 200*Sc, 20)
            ctx.fillText("Enemy Health  " + Math.floor(3*Math.pow(1.3,zone)), 200*Sc, 40)
            ctx.fillText("Damage  " + Math.floor(1*Math.pow(1.3,zone)), 200*Sc, 60)
        }else if(mouseType==3){
            ctx.fillStyle = "black"
            ctx.fillText("Hyperplating ", 200*Sc, 20)
            ctx.fillText("for the ship", 200*Sc, 40)
        }else if(mouseType==4){
            ctx.fillStyle = "black"
            ctx.fillText("Plasma accelerator ", 200*Sc, 20)
            ctx.fillText("for the ship", 200*Sc, 40)
        }else if(mouseType==5){
            ctx.fillStyle = "black"
            ctx.fillText("Boss of the zone", 200*Sc, 20)
            ctx.fillText("Enemy Health  " + Math.floor(6*Math.pow(1.4,zone)), 200*Sc, 40)
            ctx.fillText("Damage  " + Math.floor(2*Math.pow(1.35,zone)), 200*Sc, 60)
        }else if(mouseType==6){
            ctx.fillStyle = "black"
            ctx.fillText("Harvestable scrap", 200*Sc, 20)
            ctx.fillText("Scrap detected: " + 2 *zone, 200*Sc, 40)
        }else if(mouseType==7){
            ctx.fillStyle = "black"
            ctx.fillText("Space wall anomaly", 200*Sc, 20)
            ctx.fillText("Don't ask too much", 200*Sc, 40)
        }else if(mouseType==8){
            ctx.fillStyle = "black"
            ctx.fillText("Some scraparmor deposit", 200*Sc, 20)
            ctx.fillText("Armor:"+(zone-3)*2, 200*Sc, 40)

        }else if(mouseType==9){
            ctx.fillStyle = "cyan"
            ctx.fillText("Very energetic system", 200*Sc, 20)
            ctx.fillText("It's mysterious", 200*Sc, 40)

        }









    }
}
