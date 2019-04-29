function mcheck(mx,my,bx,by,bw,bh,idb){
    if (
    mx>=bx*Sc && mx <= (bx+bw)*Sc && my>=by*Sc && my<= (by+bh)*Sc    
    ){
    bpres=true
    bid=idb
    setTimeout(drawbutton,200)
    console.log(bid)    
    }else{
        
    } 
}
function butcreate(bx,by,bw,bh,color,text,fo_nt){
        if (text.length/(bw*Sc) >= 10/(100*Sc)){
            font = "bold " +12/(text.length/(bw*Sc)/(8/(100*Sc))) +"pt sans-serif"
        }
        console.log(font)
    if (fo_nt != undefined){
        font = "bold " +fo_nt +"pt sans-serif"
    }
     ctx.clearRect((bx*Sc), (by*Sc), (bw*Sc), (bh*Sc))
    ctx.fillStyle = "blue"
    
    ctx.fillRect((bx*Sc), (by*Sc), (bw*Sc), (bh*Sc));

    ctx.fillStyle = color;
    
    ctx.fillRect((bx*Sc)+1, (by*Sc)+1, (bw*Sc)-2, (bh*Sc)-2)
    ctx.font = font
    ctx.fillStyle = "black" 
    ctx.fillText(text,Sc*(bx+bw/10),Sc*(by+bh*0.60))
    font = "bold " + 12*Sc+"pt sans-serif"
     ctx.font = font

}