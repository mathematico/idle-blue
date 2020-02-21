function Shieldact(){
    if (S_shield < S_shieldmax){
        S_shield = Math.round(100*(S_shield+S_shieldregen))/100
        if (S_shield > S_shieldmax){
        S_shield=S_shieldmax
        fsave(0)    
        }



    }



}
