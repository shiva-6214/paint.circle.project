var mouseEvent = "empty";

var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d")

var color = "blue";
var width = 1;
var radius = 5;

canvas.addEventListener("mousedown", mymouseDown);

function mymouseDown(e) {
    color = document.getElementById("txtColor").value;
    width = document.getElementById("txtWidth").value;
    radius = document.getElementById("txtRadius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", mymouseUp)

function mymouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", mymouseLeave)

function mymouseLeave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", mymouseMove)

function mymouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        console.log("Current Position of x and y coordinates is = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2* Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}