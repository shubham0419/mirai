
const canvas = document.querySelector("canvas");
// creating a context(frame where we can draw).
const ctx = canvas.getContext("2d")

ctx.fillStyle = "violet"
// fillRect(x,y,width,height)
// ctx.fillRect(0,10,10,10)

// draw a circle
ctx.beginPath()
ctx.arc(100,100,30,0,Math.PI)
ctx.fill()
ctx.fillStyle = "violet"

// ctx.fill("yellow")

