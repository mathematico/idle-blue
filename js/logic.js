function Shieldact(n){
    if (S_shield < S_shieldmax){
        S_shield =Math.round(1000*(S_shield+n*S_shieldregen/100))/1000
        if (S_shield > S_shieldmax){
        S_shield=S_shieldmax
        fsave(0)
        }



    }



}
