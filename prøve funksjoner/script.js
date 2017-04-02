// Math.floor((Math.random() * 10) + 1); Mellom 1 og 10

// Definerer variabler i spillet, som hentes ut senere
var config = {
  imgs: {
    coin: "./img/Gold_coin_icon.png",
    cup: "./img/Paper_cup.png"
  },
  numCups: 3,
  numMaxTries: 1,
  numGameRounds: 1,
  coinPosition: 0,
  numTries: 0,
  found: false,
  posTried: [],
  numRoundFound:0,
  numRound:0
}

// Når nettsiden er ferdig å laste kjøres denne koden
window.onload = function () {
  f_initializeGame();
};

function f_initializeGame() {
  document.getElementById('section_game').innerHTML = "";
  document.getElementById('section_results').innerHTML = "";
  section_results.style.backgroundColor = "pink";

  config.numTries = 0;
  config.found = false;
  config.numRound = 0;
  config.coinPosition = f_randomCoinPos();

  for (var i = 0; i < config.numCups; i++) {
    document.getElementById('section_game').innerHTML += `
      <img src="${config.imgs.cup}" height="200px" id="cup_${i}" onclick="f_pickCup(this)"></img>
    `;
  }
}

function f_initializeNewGameRound() {
  document.getElementById('section_game').innerHTML = "";
  document.getElementById('section_results').innerHTML = "";
  config.numTries = 0;
  config.found = false;
  config.coinPosition = f_randomCoinPos();
  for (var i = 0; i < config.numCups; i++) {
    document.getElementById('section_game').innerHTML += `
      <img src="${config.imgs.cup}" height="200px" id="cup_${i}" onclick="f_pickCup(this)"></img>
    `;
  }
}
// if new game info is submitted run this
function f_newGameInfo(evt, el) {
  // Prevent page redirect
  evt.preventDefault();
  // Saves the new gameconfigData
  config.numCups = Number(el.numCups.value);
  config.numMaxTries = Number(el.numMaxTries.value);
  config.numGameRounds = Number(el.numGameRounds.value);

  // Starts a new game
  f_initializeGame();
}

// Genererer tilfedig posisjon til mynten mellom 0 og antall cups
// 0 = kopp nummer 1
function f_randomCoinPos() {
  return Math.floor((Math.random() * config.numCups ));
}

// Check if correct cup, and do the rest of the game mechanics
function f_pickCup(cupEl) {
  var id = Number(cupEl.id.substring(4));

// Check if numebr of tries has been exceded and if the coind is already found
  if (config.numTries < config.numMaxTries && !config.found) {
    // Check if cup is correct
    if (id == config.coinPosition) {
      document.getElementById(cupEl.id).src = config.imgs.coin;

      config.found = true;
      config.numRoundFound++;
      // Increase number of tries
      config.numTries ++;

      f_printResults();
      console.log("Du tok riktig");

      // If the cup was not correct
    } else {
      console.log("Du tok feil");
      document.getElementById(cupEl.id).style.backgroundColor = "red";

      // Increase number of tries
      config.numTries ++;
      if (config.numTries == config.numMaxTries) {
        document.getElementById('cup_'+config.coinPosition).src = config.imgs.coin;
        f_printResults();
      }
    }
  }
}

// Print results
function f_printResults() {
  // increase numRounds
  var section_results = document.getElementById('section_results');
  var distance = f_arrClosestToInt(config.coinPosition,config.posTried);
  // Check if the coin was found or not
  if (config.found) {
    section_results.style.backgroundColor = "lightgreen";
    section_results.innerHTML += `
    <h2>Gratulerer!</h2>
    <p>You found the coin in <strong>${config.numTries}</strong> tries!</p>
    `;
  } else {
    section_results.style.backgroundColor = "#ff6d6d";
    section_results.innerHTML += `
    <h2>Dessverre, det var feil!</h2>
    <p>You did not find the coin in <strong>${config.numTries}</strong> tries! Try again.</p>
    `;
    if (distance == 1) {
      section_results.innerHTML += `
      <p>... men du var nærme!</p>
      `;
    } else if (distance >= 2) {
      section_results.innerHTML += `
      <p>... og du var langt unna!</p>
      `;
    }
  }
  config.numRound++;
  console.log("config.numRound",config.numRound);
  if (config.numRound == config.numGameRounds) {
    section_results.innerHTML += `
    <h2>Game over</h2>
    <p>You found the coin in <strong>${config.numRoundFound}</strong> rounds out of <strong>${config.numGameRounds}</strong> rounds.</p>
    `;
    section_results.innerHTML += '<button onclick="f_initializeGame()">Start new game</button>';
  } else {
    section_results.innerHTML += '<button onclick="f_initializeNewGameRound()">Start new round</button>';
  }

}

// Loop thorugh arr and check what the smallest difference to int is
function f_arrClosestToInt(int,arr) {
  var distance = 9999999;
  for (var i = 0; i < arr.length; i++) {
    if(Math.abs(arr[i]-int) < distance) {
      distance = Math.abs(arr[i]-int);
    }
  }
  return distance;
}
