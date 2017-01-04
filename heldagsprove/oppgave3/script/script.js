var randomNumTableHead = document.getElementById("randomNumTableHead");
var randomNumTableBody = document.getElementById("randomNumTableBody");

// When body is fully loaded it will load this function
function documentReady() {
  randomNum = [];
  for (var i = 0; i < 5; i++) {
    randomNum.push(Math.floor(Math.random() * 20) + 1);
  }
  console.log(randomNum);

  for (var i = 0; i < randomNum.length; i++) {
    randomNumTableHead.innerHTML += `<th>${i}</th>`;
    randomNumTableBody.innerHTML += `<td>${randomNum[i]}</td>`;
  }

  drawCanvas();
}

function drawCanvas() {
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#333";

  var width = canvas.width;
  var height = canvas.height;
  // shortestlength Blir brukt til å regne ut margin
  // egentlig ikke nødvendig når størrelse e fixed
  var shortestLength = 0;
  var graphLineSpacing = 50;

  // definerer hva som skal være max verdi i grafen
  var numberOfXLines = 5;
  var numberOfYLines = 20;

  if (width <= height) {
    shortestLength = width;
  } else {
    shortestLength = height;
  }

  // Needs at least 25px for the text
  margin = 25 + shortestLength * 0.02;
  var zeroXPos = margin;
  var zeroYPos = height - margin;

  var graphPixelWidth = (width - margin * 2);
  var graphPixelHeight = (height - margin * 2);

  var xGraphLineSpacing = Math.round(graphPixelWidth / numberOfXLines);
  var yGraphLineSpacing = Math.round(graphPixelHeight / numberOfYLines);

  // Used when plotting Y-value text, the method used on X didn't work on Y
  var yRatio = graphPixelHeight / numberOfYLines;

  // Runs the different functions ==============================
  drawAxisNumbersGrid();
  drawAxes();
  // injects the randomNum arr into drawPoints function
  drawPoints(randomNum);
// =============================================================


  function drawAxes() {
    ctx.strokeStyle = "#000";
    // X-Axis
    ctx.beginPath();
    ctx.moveTo(zeroXPos - 10, zeroYPos);
    ctx.lineTo(zeroXPos + width - margin * 2, zeroYPos);
    ctx.closePath();
    ctx.stroke();
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(zeroXPos, zeroYPos + 10);
    ctx.lineTo(margin, margin);
    ctx.closePath();
    ctx.stroke();
  }

  function drawAxisNumbersGrid() {
    ctx.font = "12px Georgia"
      // Text defining value on X-axis
    for (var i = 0; i <= width - margin * 2; i += xGraphLineSpacing) {
      ctx.fillText(Math.round(i / xGraphLineSpacing), i + margin - 3, zeroYPos + 20);
      ctx.strokeStyle = "#aaa";
      ctx.moveTo(i + margin, zeroYPos);
      ctx.lineTo(i + margin, zeroYPos - height + margin * 2);
      ctx.stroke();
    }
    // Text defining value on Y-axis
    for (var i = 0; i <= height - margin * 2; i += yGraphLineSpacing * 2) {
      ctx.fillText(i / yGraphLineSpacing, zeroXPos - 25, zeroYPos - i);
      ctx.strokeStyle = "#aaa";
      ctx.moveTo(zeroXPos, zeroYPos - i);
      ctx.lineTo(zeroXPos + width - margin * 2, zeroYPos - i);
      ctx.stroke();
    }
  }

  // plots all the points from the array defined
  function drawPoints(arr) {
    for (var i = 1; i < arr.length; i++) {
      ctx.moveTo(zeroXPos + xGraphLineSpacing * (i - 1), zeroYPos - arr[i - 1] * yGraphLineSpacing);
      ctx.lineTo(zeroXPos + xGraphLineSpacing * i, zeroYPos - arr[i] * yGraphLineSpacing);
      ctx.font = "15px Arial";
      ctx.fillText(arr[i], zeroXPos + xGraphLineSpacing * i - 8, zeroYPos - arr[i] * yGraphLineSpacing + 25)
      ctx.stroke();
    }
  }
}

// Ekstra oppgaven kunne nok gjort den enda kortere, menne ja.
function bottlesOfJulebrus(textArea) {
  for (var i = 99; i >= 0; i--) {
    if (i == 1) {
      textArea.innerHTML += `
        <br>
        1 bottle of julebrus on the wall, 1 bottle of julebrus.
        Take one down and pass it around, no more bottles of julebrus on the wall.`;
    } else if (i == 0) {
      textArea.innerHTML += `
        <br>
        No more bottles of julebrus on the wall, no more bottles of julebrus. 
        Go to the store and buy some more, 99 bottles of julebrus on the wall.`;
    } else {
      textArea.innerHTML += `
        <br>
        ${i} bottles of julebrus on the wall, ${i} bottles of julebrus.
        Take one down and pass it around, ${i-1} bottle of julebrus on the wall.`;
    }

  }
}