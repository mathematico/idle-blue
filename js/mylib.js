function mcheck(mx,my,bx,by,bw,bh){
    if (
    mx>=bx && mx <= bx+bw && my>=by && my<= by+bh    
    ){
    bpres=true
    }else{
    bpres=false    
    } 
}
function butcreate(bx,by,bw,bh,color,text){
    ctx.strokeStyle = "blue"
    ctx.fillStyle = color;
    ctx.rect(bx, by, bw, bh);
    ctx.stroke();
    
    
    ctx.fillRect(bx+1, by+1, bw-2, bh-2)
    
}