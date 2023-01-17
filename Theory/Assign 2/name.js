function initFunc(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.strokeStyle = "#000000"
  ctx.lineWidth = "5";
  ctx.beginPath();
  ctx.arc(100, 100, 50,- 1/4 * Math.PI, 0.5 * Math.PI, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 200, 50, 3/2 * Math.PI, 0.8 * Math.PI);
  ctx.stroke();


  ctx.moveTo(500,100);
  ctx.lineTo(500,250);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(500, 50, 10, 0, 2  * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 200, 50, - 0.5 * Math.PI, 0.5 * Math.PI);
  ctx.stroke();

  ctx.moveTo(300,50);
  ctx.lineTo(300,250);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 200, 50, - 0.5 * Math.PI, 0.5 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 100, 50, - 0.5 * Math.PI, 0.5 * Math.PI);
  ctx.stroke();

};
