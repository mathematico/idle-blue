var e_healthmax = 0, e_health=e_healthmax
var e_damage = 0


function fight(t){
    if (t==1){
    e_healthmax = Math.floor(3*Math.pow(1.3,zone))
    e_health=e_healthmax
    e_damage = Math.floor(1*Math.pow(1.3,zone))
    infight= true
    }
    if (t==2){
    e_healthmax = Math.floor(6*Math.pow(1.40,zone))
    e_health=e_healthmax
    e_damage = Math.floor(2*Math.pow(1.35,zone))
    infight= true
    inbossfight= true
    }
Shopupdate()
}

function turn(){
    if (infight==true && gamedone==false){
    e_health = e_health - S_damage
        if (e_health >0){
            inter_2 = e_damage - Math.floor(S_shield)
                if (inter_2>=0){
                    S_shield=0

                    inter=scraparmor-(inter_2*0.5)
                    if (inter >=0){
                    scraparmor=Math.floor(inter)
                    }else{
                    scraparmor=0
                    S_health = S_health - Math.floor(-2*inter)

                }}else{
                    S_shield=S_shield-e_damage
                }


        }else {
            if (inbossfight==false){
                infight=false
                scrapamount += 2*zone
                fsave(0)
            } else if(inbossfight==true){
                console.log("bosskill")
                infight=false
                inbossfight=false
                scrapamount += 8*zone
                tcamount += Math.floor(Math.pow(zone,1.1)/10)
                zone +=1
                initmap(zone)
                fsave(0)
        }
    }

}
    if (S_health <=0){
        gameover()
    }
Shopupdate()
}
