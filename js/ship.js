var S_healthmax = 10, S_health = S_healthmax
var S_damage = 1
function initship(){
S_healthmax = 10+2*Phealth, S_health = S_healthmax
S_damage = 1
scraparmor=0
}

function shieldpickup(){
    if (S_shieldregen == 0){
    S_shieldmax =10
    S_shield=1
    S_shieldregen =0.01

}else{
  S_shieldregen = Math.floor(1000*1.2*S_shieldregen)/1000
}
S_shieldregen=Math.ceil(S_shieldregen*1000)/1000
}
