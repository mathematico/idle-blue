function buyheal(){
    if (scrapamount>= Healprice && S_health<S_healthmax){
        S_health = Math.round(S_health + 0.1*S_healthmax)
        scrapamount = scrapamount - Healprice
        if (S_health > S_healthmax) {
            S_health=S_healthmax
            
        }
        
        
        Healprice = Math.ceil(Healprice*1.25)
        drawbutton() 
       //ctx.clearRect(0, 0, 200*Sc , 80*Sc)
    }
    
    
    
   
}
function buyscraparmor(){
    if (scrapamount >= scraparmorprice){
        scraparmor = Math.round(0.08*S_healthmax)
        scrapamount -=  scraparmorprice
        scraparmorprice = Math.ceil(scraparmorprice*1.5)
    
    }
    
    
    
}