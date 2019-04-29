function drawSshop(){
    if (shopfirst == true){
        setTimeout(shoptime,10)
        
        
    }else{
    
    ctx.clearRect(10, 0, 200*Sc , 80*Sc)
    ctx.fillStyle = "black"
    ctx.fillText("Health  " + S_health + " / " + S_healthmax, 10, 20)
    ctx.fillText("Scrap  " + scrapamount, 10, 40)
    ctx.fillText("Scraparmor "+scraparmor, 10, 60)
    if (S_shieldregen>0){
    ctx.clearRect(10, 180, 200*Sc , 60*Sc)    
    ctx.fillStyle = "cyan"
    ctx.fillText("Shield  " + S_shield + " / " + S_shieldmax, 10, 200)
    ctx.fillText("Shieldregen " + S_shieldregen * 10 + "/s", 10, 220)     
    }
    
        
    }
    
}

function shoptime(){
    
    shopfirst = false
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    drawbutton()
}