function encounter(a){
    if (a==1){
        fight()
        
    }
    if (a==3)
        bonus(1)
    
    
}
function bonus(t){
    if (t==1){
        R= S_health/S_healthmax
        S_healthmax = Math.floor(S_healthmax * 1.25)
        S_health= Math.round(S_healthmax*R)
    }
    
}
