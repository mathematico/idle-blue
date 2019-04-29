function drawSshop(){
    if (shopfirst == true){
        setTimeout(shoptime,10)
        
        
    }else{
    
    ctx.clearRect(0, 0, 200*Sc , 80*Sc)
    ctx.fillText("Health  " + S_health + " / " + S_healthmax, 10, 20)
    ctx.fillText("Scrap  " + scrapamount, 10, 40)
    ctx.fillText("Scraparmor "+scraparmor, 10, 60)
    }
}

function shoptime(){
    
    shopfirst = false
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    drawbutton()
}