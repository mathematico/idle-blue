var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = 1280
ctx.canvas.height = 640
var mmenu = true
var tileW = 32 , tileH = 32 ;
var mapW = 20, mapH = 20
var mapx = 400 , mapy = 0
var pposx = 10, pposy = 10
var pcase = pposx + pposy * mapW
var R = 0, Sc=1
var scrapammout=0
var zone=1  
var infight=false
var inbossfight= false
var bpres=false
var gamedone = false
var mouseX=0,mouseY=0
function init(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    drawbutton()
    gamedone = false
    mmenu = true
    mapW = 20, mapH = 20
    mapx = 400 , mapy = 0
    pposx = 10, pposy = 10
    pcase = pposx + pposy * mapW
    R = 0
    scrapammout=0
    zone=1  
    infight=false
    inbossfight=false
    initmap(1)
    initship()
    drawbutton()
}
var font= "bold 12pt sans-serif"

function load(s){
font = "bold " + 12*s+"pt sans-serif"
ctx.canvas.width  = 1280 * s
ctx.canvas.height = 640 * s   
tileW = 32 * s, tileH = 32 * s
mapW = 20, mapH = 20
mapx = 400 * s , mapy = 0
pposx = 10, pposy = 10
pcase = pposx + pposy * mapW
Sc=s
console.log(pcase)

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function drawloop()
{       
    if (mmenu == true){
        requestAnimationFrame(drawGame);
        requestAnimationFrame(drawText);
        requestAnimationFrame(drawFText);
    
    }

}
setInterval(drawloop,100)    

function movementloop()
{
   movement();
}
setInterval(movementloop,100)
function fightloop()
{
   turn();
}
setInterval(fightloop,500)



