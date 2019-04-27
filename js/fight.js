var e_healthmax = 0, e_health=e_healthmax
var e_damage = 0


function fight(){
    e_healthmax = zone * 3
    e_health=e_healthmax
    e_damage = zone
    infight= true    

    
}

function turn(){
    if (infight==true){
    e_health = e_health - S_damage
        if (e_health >=0){
        S_health = S_health - e_damage
    } else {
        infight=false
    }
    
}
}