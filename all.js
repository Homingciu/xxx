//定位
var pBtn = document.getElementsByClassName("positionBtn")[0];
pBtn.onclick = getLocation;


//画布 
var oCanvas = document.getElementById("drawing-board"),
    ctx = oCanvas.getContext("2d"),
    lastX,
    lastY;

ctx.lineWidth = "5px";


function clickStart(e) {
    e.preventDefault();
    lastX = e.clientX;
    lastY = e.clientY;
    // drawRound(lastX,lastY);
    oCanvas.onmousemove = mouseMove;
    oCanvas.onmouseup = clickEnd;            
}

function mouseMove(e) {
    e.preventDefault();
    drawLine(lastX,lastY,e.clientX,e.clientY);
    lastX = e.clientX;
    lastY = e.clientY;
}

function clickEnd(e) {
    oCanvas.onmousemove = null;
    oCanvas.onmouseup = null;
}
// function drawRound(x,y) {
//     ctx.fillStyle="#FF0000";
//     ctx.beginPath();
//     ctx.arc(x,y,5,0,Math.PI*2,true);
//     ctx.closePath();
//     ctx.fill();
// }

function drawLine(startX,startY,endX,endY) {
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}


oCanvas.onmousedown = clickStart;


//画布下的按钮
var fBtn = document.getElementsByClassName("finishBtn")[0],
    pic = document.getElementsByClassName("pic")[0],
    cBtn = document.getElementsByClassName("clearBtn")[0];

fBtn.onclick = function () {
    pic.src = oCanvas.toDataURL();
}

cBtn.onclick = function () {
    oCanvas.height = oCanvas.height;
}