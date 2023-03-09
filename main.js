canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "orange";

ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = 6;

ctx.arc(400, 300, 100, 0, 2*Math.PI);

ctx.stroke();

color = document.getElementById("color").value;