var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = 1280
ctx.canvas.height = 640
var tileW = 32 , tileH = 32 ;
var mapW = 20, mapH = 20
var mapx = 400 , mapy = 0
var pposx = 10, pposy = 10
var pcase = pposx + pposy * mapW
var R = 0, Sc=1
var zone=1
var infight=false
console.log(pcase)

function load(s){
ctx.canvas.width  = 1280 * s
ctx.canvas.height = 640 * s   
tileW = 32 * s, tileH = 32 * s
mapW = 20, mapH = 20
mapx = 400 * s , mapy = 0
pposx = 10, pposy = 10
pcase = pposx + pposy * mapW
Sc=1
console.log(pcase)

}
load(1)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function drawloop()
{
    requestAnimationFrame(drawGame);
    requestAnimationFrame(drawText);
        requestAnimationFrame(drawFText);
}
setInterval(drawloop,100)    

function movementloop()
{
   movement();
}
setInterval(movementloop,500)
function fightloop()
{
   turn();
}
setInterval(fightloop,1000)



