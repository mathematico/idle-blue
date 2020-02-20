function encounter(a){

    if (a==2){
        fight(1)

    }
    if (a==3){
        bonus(1)
    }
    if (a==4){
        bonus(2)
    }
    if (a==5){
        fight(2)
    }
    if (a==6){
        bonus(3)
    }
    if (a==8){
        bonus(4)
    }
    if (a==9){
        bonus(5)
    }

}
function bonus(t){

    if (t==1){
        R= S_health/S_healthmax
        S_healthmax = Math.floor(S_healthmax * 1.25)
        S_health= Math.round(S_healthmax*R)
    }
    if (t==2){
        S_damage = Math.ceil(S_damage * 1.25)
    }
    if (t==3){
        scrapamount += 2 *zone
    }
    if (t==4){
        scraparmor += 2 *(zone-3)
    }
    if (t==5){
        shieldpickup()
    }
Shopupdate()
}
