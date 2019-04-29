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
        if (bpres ==true, bid==1){
            console.log(Ssmenu)
            Ssmenu=false
            mmenu=true
            bpres =false
        }
        
    }
    if (shopfirst == false && Ssmenu== true){
        mcheck(mouseX,mouseY,0,80,200,50,2)
        if (bpres ==true, bid==2){
            buyheal()
        }
        
    }
    
        
        
        
        
        
    
    
    
    
    
    
    
    
}