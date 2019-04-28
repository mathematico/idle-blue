document.addEventListener("mousemove", mouseP, false);
     function mouseP (e) {
        mouseX = e.clientX-10; 
        mouseY = e.clientY-10;
     }

document.addEventListener("click",checkbutton);
    



function drawbutton(){
    if (gamedone == true){
        
        butcreate(450,400,100,50,"gray","restart?")
        
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
    
    
    
    
    
    
    
}
