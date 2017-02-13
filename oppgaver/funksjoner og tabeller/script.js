var ranNumbers = [];
var ranNumbersMin = 0;
var ranNumbersMax = 0;
textResultBox = document.getElementById('textResultBox');

function f_generateNumbers(min, max, num, arrOut) {
  ranNumbersMin = min;
  ranNumbersMax = max;
  for (var i = 0; i < num; i++) {
    arrOut[i] = Math.floor( Math.random() * (max-min+1) + min);
  }
}

function f_printTable(arr, tableBody) {
  for (var i = 0; i < arr.length; i++) {
    tableBody.innerHTML += `<tr><td>${arr[i]}</td></tr>`;
  }
  textResultBox.value += `The value of all numbers are: ${f_calcAllNums(arr)}\n`;
}

function f_calcAllNums(arr) {
  return arr.reduce(function (a,b) {
    return a+b;
  });
}

function f_numOccurences(int) {
  if (int < ranNumbersMin || int > ranNumbersMax) {
    textResultBox.value += `${int} is outside of randomNumTable range\n`;
  } else {
    var occurrences = 0;
    for (var i = 0; i < ranNumbers.length; i++) {
      if (int == ranNumbers[i]) {
        occurrences++;
      }
    }
    textResultBox.value += `There are ${occurrences} of ${int} in the table.\n`;

  }
}

document.getElementById('searchForm').onsubmit = function(e) {
  e.preventDefault();
  f_numOccurences(Number(this.formInt.value));
};

f_generateNumbers(0,20,100,ranNumbers);

f_printTable(ranNumbers, document.getElementById('tableBody'));
