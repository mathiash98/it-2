// Math.floor((Math.random() * 10) + 1); Mellom 1 og 10
function editRadius(inRadius, svgId) {
  var radius = Number(inRadius);
  document.getElementById(svgId).setAttribute('r',radius);
}

var pulsing = false;
var lastSpeed = 10;
var r = 0;
var increase = true;
var pulseIntervalId;
var colorIntervalId;
var colorPulse = false;

function pulse(svgId,min,max, speed) {
  if (pulsing == true && lastSpeed==speed) {
    clearInterval(pulseIntervalId);
    pulsing = false;
  } else {
    lastSpeed=speed;
    pulsing=true;
    clearInterval(pulseIntervalId);
    pulseIntervalId=setInterval(function pulser () {
      document.getElementById(svgId).setAttribute('r',r);
      if (r >= max) {
        increase=false;
      } else if (r<=min) {
        increase=true;
      }
      if (increase == true) {
        r+=10;
      } else {
        r-=10;
      }
    }, speed);
  }
}

function pulseColor(svgId) {
  if (colorPulse == true) {
    clearInterval(colorIntervalId);
    colorPulse = false;
  } else {
    colorPulse = true;
    clearInterval(colorIntervalId);
    colorIntervalId = setInterval(function () {
      document.getElementById(svgId).style.fill="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    },lastSpeed);
  }
}

function changeColor(svgId, color) {
  clearInterval(colorIntervalId);
  document.getElementById(svgId).style.fill=color;
}
