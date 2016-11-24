var canvas1 = document.getElementById("canvas1");

var ctx = canvas1.getContext("2d");

var width = window.innerWidth;
var height = window.innerHeight;

canvas1.height = height;
canvas1.width = width;

var paint;
var clickX = [];
var clickY = [];
var clickDrag = [];

canvas1.onmousedown = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    paint = true;
    addClick(mouseX, mouseY, true);
    clickDrag.push(false);
    redraw();
}

canvas1.onmousemove = function(e) {
    if(paint){
        addClick(e.clientX, e.clientY);
        redraw();
    }
}

canvas1.onmouseup = function(e) {
    paint = false;
}

canvas1.onmouseleave = function(e) {
    paint = false;
}

function addClick (x, y) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(true);
}

function redraw () {
    ctx.clearRect(0,0,canvas1.width,canvas1.height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";

    for (var i = 0; i < clickX.length; i++) {
        ctx.beginPath();
        if(clickDrag[i] && i){
            ctx.moveTo(clickX[i-1], clickY[i-1]);
        } else {
            ctx.moveTo(clickX[i-1], clickY[i])
        }
        ctx.lineTo([clickX[i]], clickY[i]);
        ctx.closePath();
        ctx.stroke();
    }
}