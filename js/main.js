var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var tileW = 32, tileH = 32;
var mapW = 20, mapH = 20
var mapx = 400, mapy = 0
var pposx = 10, pposy = 10
var pcase = pposx + pposy * mapW
console.log(pcase)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function drawloop()
{
    requestAnimationFrame(drawGame);
}
setInterval(drawloop,100)    

function movementloop()
{
   movement();
}
setInterval(movementloop,500)