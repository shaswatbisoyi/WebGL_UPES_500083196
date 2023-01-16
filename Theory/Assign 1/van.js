function initFunc(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(316, 508, 40, 0, 2  * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(620, 508, 40, 0, 2  * Math.PI);
  ctx.fill();

  var grd = ctx.createLinearGradient(0,0,1000,0);
  grd.addColorStop(0,"white");
  grd.addColorStop(1,"red");

  ctx.fillStyle = grd;
  ctx.fillRect(260,200,425,255);

  ctx.fillStyle = "#6A3900";
  ctx.fillRect(685,255,200,200);

  ctx.fillStyle = "#000000";
  ctx.fillRect(790,255,95,100);

};
