document.addEventListener("mousemove", mouseP, false);
     function mouseP (e) {
        mouseX = e.clientX-game.offsetLeft;
        mouseY = e.clientY-game.offsetTop;
         if (Math.floor((mouseX-mapx)/tileW)<mapW && Math.floor((mouseY-mapy)/tileH) <mapH &&mouseX>mapx &&mouseY>mapy)
            {    mouseCase= Math.floor((mouseX-mapx)/tileW)+ Math.floor((mouseY-mapy)/tileH)*mapH;
             //console.log(mouseCase)
            } else{
            mouseCase=null }
     }
