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
        scraparmor += Math.round(0.04*S_healthmax)
        scrapamount -=  scraparmorprice
        scraparmorprice = Math.ceil(scraparmorprice*1.1)

    }



}
function buyshieldmax(){
    if (scrapamount >= Shieldmaxprice){
        S_shieldmax = Math.floor(S_shieldmax*1.25)
        scrapamount -= Shieldmaxprice
        Shieldmaxprice = Math.ceil(Shieldmaxprice*1.5)

    }

}
function buyshieldregen(){
    if (scrapamount >= Shieldregenprice){
        S_shieldregen = S_shieldregen*2
        scrapamount -= Shieldregenprice
        Shieldregenprice = Math.ceil(Shieldregenprice*4)

    }

}
