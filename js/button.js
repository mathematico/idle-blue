document.addEventListener("mousemove", mouseP, false);
     function mouseP (e) {
        mouseX = e.clientX-10;
        mouseY = e.clientY-10;
         if (Math.floor((mouseX-mapx)/tileW)<mapW && Math.floor((mouseY-mapy)/tileH) <mapH &&mouseX>mapx &&mouseY>mapy)
            {    mouseCase= Math.floor((mouseX-mapx)/tileW)+ Math.floor((mouseY-mapy)/tileH)*mapH;
             console.log(mouseCase)
            } else{
            mouseCase=null }
     }

document.addEventListener("click",checkbutton);




function drawbutton(){
    if (gamedone == true){

        butcreate(450,400,100,50,"gray","restart?")

    }
     if (mmenu == true && scrapamount>0){

        butcreate(0,540,100,50,"brown","improvements")

    }
    if (shopfirst == false && Ssmenu== true){

        butcreate(0,540,100,50,"brown","back")

    }
    if (shopfirst == false && Ssmenu== true){

        butcreate(0,80,200,50,"red","Heal " +Math.round(0.1*S_healthmax)+ " Hp price:"+Healprice)

    }
    if (shopfirst == false && Ssmenu== true && Healprice>=8){

        butcreate(0,130,200,50,"red","Buy " +Math.round(0.04*S_healthmax)+ " armor price:"+scraparmorprice)

    }
    if (shopfirst == false && Ssmenu== true && S_shieldregen>0){

        butcreate(0,240,200,50,"royalblue","Increase to " +Math.floor(S_shieldmax * 1.25)+ " Shield max, price:"+Shieldmaxprice,7)

    }
    if (shopfirst == false && Ssmenu== true && S_shieldmax>20){

        butcreate(0,290,200,50,"royalblue","Increase to " +S_shieldregen*2 + " Shield regen, price:"+Shieldregenprice,7)

    }

}


function checkbutton(){
    console.log(mouseX,mouseY)
    if (gamedone == true){
        mcheck(mouseX,mouseY,450,400,100,50)
        if (bpres ==true){
            init()
            bpres =false
        }
    }
     if (mmenu == true && scrapamount>0){
        mcheck(mouseX,mouseY,0,540,100,50)
        if (bpres ==true){
            console.log(Ssmenu)
            shopfirst = true
            mmenu=false
            bpres =false
            Ssmenu = true
        }
     }
    if (shopfirst == false && Ssmenu== true){
        mcheck(mouseX,mouseY,0,540,100,50,1)
        if (bpres ==true && bid==1){
            console.log(Ssmenu)
            Ssmenu=false
            mmenu=true
            bpres =false
        }

    }
    if (shopfirst == false && Ssmenu== true){
        mcheck(mouseX,mouseY,0,80,200,50,2)
        if (bpres ==true && bid==2){

            buyheal()
            bpres = false
        }

    }
    if (shopfirst == false && Ssmenu== true && Healprice>=8){
        mcheck(mouseX,mouseY,0,130,200,50,3)
        if (bpres ==true && bid==3){
             buyscraparmor()
            bpres=false
        }

    }
    if (shopfirst == false && Ssmenu== true && S_shieldregen>0){
        mcheck(mouseX,mouseY,0,240,200,50,4)
        if (bpres ==true && bid==4){
             buyshieldmax()
            bpres=false
        }

    }
    if (shopfirst == false && Ssmenu== true && S_shieldmax>20){
        mcheck(mouseX,mouseY,0,290,200,50,5)
        if (bpres ==true && bid==5){
             buyshieldregen()
            bpres=false
        }

    }














}
