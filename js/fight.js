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
    e_healthmax = Math.floor(6*Math.pow(1.35,zone))
    e_health=e_healthmax
    e_damage = Math.floor(2*Math.pow(1.30,zone))
    infight= true
    inbossfight= true
    }
    
}

function turn(){
    if (infight==true){
    e_health = e_health - S_damage
        if (e_health >=0){
        S_health = S_health - e_damage
    } else {
        if (inbossfight==false){
        infight=false
        } else if(inbossfight==true){
        infight=false
        inbossfight=false
        zone +=1
        initmap(zone)
        }
    }
    
}
    if (S_health <=0){
        gameover()
    }
}