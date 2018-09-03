var canvas = document.getElementById("my_can");

//basic setting for size of canvas
canvas.width = "500";
canvas.height = "500";

//color of canvas
canvas.style.backgroundColor = "rgb(0,0,0)";

//return 2d drawing
var ctx = canvas.getContext("2d");

//add rectangle with whitecolor
ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(5, 5, 100, 100);



