function mcheck(mx,my,bx,by,bw,bh){
    if (
    mx>=bx*Sc && mx <= (bx+bw)*Sc && my>=by*Sc && my<= (by+bh)*Sc    
    ){
    bpres=true
    }else{
        
    } 
}
function butcreate(bx,by,bw,bh,color,text){
     ctx.clearRect((bx*Sc), (by*Sc), (bw*Sc), (bh*Sc))
    ctx.strokeStyle = "blue"
    ctx.fillStyle = color;
    ctx.rect((bx*Sc), (by*Sc), (bw*Sc), (bh*Sc));
    ctx.stroke();
    
    
    ctx.fillRect((bx*Sc)+1, (by*Sc)+1, (bw*Sc)-2, (bh*Sc)-2)
    ctx.font = font
    ctx.fillStyle = "black" 
    ctx.fillText(text,Sc*(bx+bw/10),Sc*(by+bh*0.66))
}