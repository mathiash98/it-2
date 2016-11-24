// squares ========================================================
function drawCanvas() {
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#000";

    var rectNum = 4;
    var diagonal = Math.floor(Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height));
    for (var i = 0; i < diagonal-100; i+=50) {
        ctx.beginPath();
        ctx.rect(i, i, 100, 100);
        ctx.closePath();
        ctx.stroke();
        for (var j = 0; j < rectNum; j++) {
          ctx.beginPath();
          ctx.rect(i-j*10, i-j*10, 100+j*15, 100+j*15);
          ctx.closePath();
          ctx.stroke();
        }
    }
}

// Graph =========================================================

function drawGrid() {
  var canvas = document.getElementById("gridCanvas");
  var ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#333";

  var width = canvas.width;
  var height = canvas.height;
  var shortestLength;
  var margin = 0;
  var graphLineSpacing = 50;

  if (width <= height) {
    shortestLength = width;
  } else {
    shortestLength = height;
  }
  margin = shortestLength*0.05;
  zeroXPos = margin;
  zeroYPos = height - margin;

  drawXAxisNumbersGrid();
  drawAxes();

  function drawAxes() {
      ctx.strokeStyle = "#000";
      // X-Axis
      ctx.beginPath();
      ctx.moveTo(zeroXPos-10,zeroYPos);
      ctx.lineTo(zeroXPos+width-margin*2,zeroYPos);
      ctx.closePath();
      ctx.stroke();
      // Y-axis
      ctx.beginPath();
      ctx.moveTo(zeroXPos,zeroYPos+10);
      ctx.lineTo(margin, margin);
      ctx.closePath();
      ctx.stroke();
  }

  function drawXAxisNumbersGrid() {
    ctx.font = "12px Georgia"
    for (var i = 0; i <= width-margin*2; i+=graphLineSpacing) {
      ctx.fillText(i, i+margin-3, zeroYPos + 20);
      ctx.strokeStyle = "#aaa";
      ctx.moveTo(i+margin, zeroYPos);
      ctx.lineTo(i+margin, zeroYPos-height+margin*2);
      ctx.stroke();
    }

    for (var i = 0; i <= height-margin*2; i+=graphLineSpacing) {
      ctx.fillText(i, zeroXPos-25, zeroYPos-i);
      ctx.strokeStyle = "#aaa";
      ctx.moveTo(zeroXPos, zeroYPos-i);
      ctx.lineTo(zeroXPos+width-margin*2, zeroYPos-i);
      ctx.stroke();
    }
  }

}
function drawLine(fromX, fromY, toX, toY) {
  var fromX = Number(fromX.value);
  var fromY = Number(fromY.value);
  var toX = Number(toX.value);
  var toY = Number(toY.value);
  ctx = document.getElementById("gridCanvas").getContext("2d");
  ctx.strokeStyle = "#000";
  ctx.moveTo(zeroXPos+fromX, zeroYPos-fromY);
  ctx.lineTo(zeroXPos+toX, zeroYPos-toY);
  ctx.stroke();
}
