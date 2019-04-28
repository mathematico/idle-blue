    function gameover(){
        if (gamedone == false){    
            gamedone = true
            mmenu = false
            setTimeout(gameoverdraw,200)
    
        }
    }
    function gameoverdraw(){
        ctx.clearRect(0, 0, ctx.canvas.width , ctx.canvas.height)
        drawbutton()
        ctx.fillStyle = "#ff0000" 
        ctx.fillText("you died", 10, 20)    
        
    }