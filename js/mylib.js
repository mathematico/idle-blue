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
