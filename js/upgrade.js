function buyheal(){
    if (scrapamount>= Healprice && S_health<S_healthmax){
        S_health = Math.round(S_health + 0.1*S_healthmax)
        scrapamount = scrapamount - Healprice
        if (S_health > S_healthmax) {
            S_health=S_healthmax

        }


        Healprice = Math.ceil(Healprice*1.25)
    }
            Shopupdate()
}
function buyscraparmor(){
    if (scrapamount >= scraparmorprice){
        scraparmor += Math.round(0.04*S_healthmax)
        scrapamount -=  scraparmorprice
        scraparmorprice = Math.ceil(scraparmorprice*1.1)

    }


Shopupdate()
}
function buyshieldmax(){
    if (scrapamount >= Shieldmaxprice&&S_shieldregen>0){
        S_shieldmax = Math.floor(S_shieldmax*1.25)
        scrapamount -= Shieldmaxprice
        Shieldmaxprice = Math.ceil(Shieldmaxprice*1.5)

    }
        Shopupdate()
}
function buyshieldregen(){
    if (scrapamount >= Shieldregenprice&&S_shieldregen>0){
        S_shieldregen = S_shieldregen*2
        scrapamount -= Shieldregenprice
        Shieldregenprice = Math.ceil(Shieldregenprice*4)

    }
        Shopupdate()
}
function Shopupdate(){
  var Bbuyhealtext = "heal:" + Math.round(0.1*S_healthmax) + "Hp for:" + Healprice +" scraps"
document.getElementById("Bbuyheal").innerHTML= Bbuyhealtext
  if (Healprice>8){
    document.getElementById("Bbuyscraparmor").style.display= "block"
  }
document.getElementById("Bbuyscraparmor").innerHTML= "buy:" + Math.round(0.04*S_healthmax) + "armor for:" + scraparmorprice +" scraps"
 if (S_shieldregen >=0.01){
   document.getElementById("Bbuyshieldmax").style.display= "block"
   document.getElementById("Bbuyshieldregen").style.display= "block"
 }
 document.getElementById("Bbuyshieldmax").innerHTML= "upgrade:" + Math.floor(S_shieldmax*1.25) + " max shield for:" + Shieldmaxprice +" scraps"
 document.getElementById("Bbuyshieldregen").innerHTML= "upgrade:" + (S_shieldregen*20).toFixed(2) + " shield regen for:" + Shieldregenprice +" scraps"

}
