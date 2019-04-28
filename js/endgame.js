function gameover(){
    gamedone = true
    mmenu = false
      ctx.clearRect(0, 0, ctx.canvas.width , ctx.canvas.height)
     ctx.fillStyle = "#ff0000" 
    ctx.fillText("you died", 10, 20)
    init()

    
}