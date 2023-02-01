var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var xSlider = document.getElementById("xSlider");
var ySlider = document.getElementById("ySlider");

var x = xSlider.value;
var y = ySlider.value;

xSlider.oninput = function() {
    x = this.value;
    drawCircle();
}

ySlider.oninput = function() {
    y = this.value;
    drawCircle();
}

function drawCircle() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.setTransform(1,0,0,1,x,y);

  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(316, 508, 40, 0, 2  * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(620, 508, 40, 0, 2  * Math.PI);
  ctx.fill();

  var grd = ctx.createLinearGradient(0,0,1000,0);
  grd.addColorStop(0,"yellow");
  grd.addColorStop(1,"red");

  ctx.fillStyle = grd;
  ctx.fillRect(260,200,425,255);

  ctx.fillStyle = "#3366C9";
  ctx.fillRect(685,255,200,200);

  ctx.fillStyle = "#000000";
  ctx.fillRect(790,255,95,100);
}

drawCircle();
