var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var tileW = 32, tileH = 32;
var mapW = 20, mapH = 20
var mapx= 400, mapy=0




function drawloop()
{
    requestAnimationFrame(drawGame);
}
setInterval(drawloop,100)    
