function gameover(){
        if (gamedone == false){
            infight = false
            gamedone = true
            mmenu = false
            fopentab('Prestige')
            document.getElementById("BPrestige").style.display = "inline"
            drawprestige()
            S_health=0
            drawText()
        }
  }

function resetgame(){
    if (Math.floor(Math.pow(1.1,zone))-1>=1){

     tcamount= tcamount + (Math.floor(Math.pow(1.1,zone))-1)
    }

        init()
drawprestige()
}
function drawprestige(){
   if (Math.floor(Math.pow(1.1,zone))-1>=1){
     document.getElementById("BPrestige").style.display = "inline"

   }
   document.getElementById("Breset").innerHTML = "Reset for:" + (Math.floor(Math.pow(1.1,zone))-1) + " temporal currency"
   drawText()
   if (tcamount>=1||Phealth>=1){
     document.getElementById("BPrestige").style.display = "inline"
     document.getElementById("BPhealtht").style.display = "block"
     document.getElementById("BPhealth+").style.display = "inline"
     document.getElementById("BPhealth-").style.display = "inline"
     document.getElementById("BPshieldmaster").style.display = "inline"
   }
   document.getElementById("BPhealtht").innerHTML = "Health bonus on start game:" + Phealth*2
   document.getElementById("BPhealth+").innerHTML = "+1 for :" + Phealthprice + " TC"
   document.getElementById("BPhealth-").innerHTML = "-1 for :" + Phealthprice/2 + " TC"
   if (Pshieldmaster==false){
     document.getElementById("BPshieldmaster").innerHTML = "Buy for 1 TC"
   }else{
     document.getElementById("BPshieldmaster").innerHTML = "Bought"
   }
}


function fpuhealth(n){
  if (n==1&&tcamount>=Phealthprice){
    tcamount -=Phealthprice
    Phealth +=1
    Phealthprice*=2
  }else if (n==0&&Phealth>=1){
    tcamount +=Phealthprice/2
    Phealth -=1
    Phealthprice/=2
  }
drawprestige()
}
function fshieldmaster(){
  if (Pshieldmaster==false&&tcamount>=1){
    Pshieldmaster=true
    tcamount -= 1
  }
drawprestige()

}
