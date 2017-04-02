var judgePoints = [];
var sortedJudgePoints = [];
var judgePointsCombined = 0;
var jumpPoints = 0;
var totalPoints = 0;

var meterLength = 0;
var kPoint = 0;
var meterValue = 0;

// Funksjon som kjlres hver gang lengde og bakkeinfo endres
// Bruker funksjonen som er i oppgaveteksten
// Og gir "live" poengoppdatering om alle felt er fyllt ut
function calcJumpPoint(meterLengthInput, kPointInput, meterValueInput) {
  meterLength = Number(meterLengthInput.value);
  kPoint = Number(kPointInput.value);
  meterValue = Number(meterValueInput.value);
  if (meterLength > 0 && kPoint > 0 && meterValue > 0) {
    jumpPoints = 60 + meterValue * (meterLength - kPoint);
    console.log("jumpPoints: " + jumpPoints);
    document.getElementById("currentJumpPoints").innerHTML = `
    Skihopp poeng uten dommerpoeng = ${jumpPoints}
    `;
  }
}

// En funksjon som kjøres hver gang et dommerinputfelt endres
// og setter verdien inn i judgePoints arrayen på den definerte plassen
// Kommer til å fjerne denne og heller legge til verdier når form
// submittes om eg har tid og strøm...
//function setJudgePoint(input, arrPos) {
//  judgePoints[arrPos] = Number(input.value);
//  console.log(judgePoints);
//}

// Sorts Array
function sortJudgePoints() {
  sortedJudgePoints = judgePoints;
  sortedJudgePoints.sort(function(a,b){return a-b});
  console.log("Sorted Array: " + sortedJudgePoints);
}

// Removed first and last element of array and combines the rest of them
function calcJudgePoints() {
  sortedJudgePoints.pop();
  sortedJudgePoints.shift();
// Loops through the remaining elements and combines them to the judges score
  for (var i = 0; i < sortedJudgePoints.length; i++) {
    judgePointsCombined += sortedJudgePoints[i];
  }
}

// Når pengForm submittes kjøres denne funksjonen
document.getElementById("poengForm").onsubmit = function (evt) {
  evt.preventDefault(); //Stopper den vanlige form videresendingen

// Pushes all judgesScores into judgePoints
  for(var i = 1; i<6; i++) {
    judgePoints.push(Number(document.getElementById("judgeInput"+i).value));
  }
  
  sortJudgePoints(); // Sorts judgePoints array
  calcJudgePoints(); // Removes smallest and highest point, then combines the remaing element

  totalPoints = jumpPoints + judgePointsCombined;
  document.getElementById("totalJumpPoints").innerHTML = `
  Hoppet er ${meterLength}m, med et K-punkt på ${kPoint}m og en meterverdi på ${meterValue}.
  <br>
  Ble det ${jumpPoints} lengdepoeng.
  <br>
  Den sorterte dommerPoengTabellen uten høyeste og laveste verdi er slik: ${sortedJudgePoints}.
  <br>
  De tellende dommerpoengene gir ${judgePointsCombined} poeng.
  <br>
  Totalt ga hoppet ${totalPoints} poeng.
  `;
}
