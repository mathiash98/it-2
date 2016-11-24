var merkeligNavn = document.getElementById('merkeligNavn').innerHTML;
var merkeligNavnLength = merkeligNavn.length;

document.getElementById('infoOmTekst').innerHTML = (
  `Teksten ovenfor, ${merkeligNavn} er ${merkeligNavnLength} tegn langt.`
);
document.getElementById('browser').innerHTML = (
  `You are using ${window.navigator.userAgent} <br>
  And the width of your browser is ${window.innerWidth}px <br>
  Height: ${window.innerHeight}px <br>
  `
);

// Currencies

var currencies = {};
// makes a new script element
var script = document.createElement('script');
// Adds source to the script element
// ?callback= defines what function which will be runned after data has recieved
script.src = "https://api.fixer.io/latest?callback=currencyCB";
// Appends the script to the html (almost the only way to retrieve data from crosssites)
document.body.appendChild(script);

// callback function for the currencyAPI
function currencyCB(data) {
  currencies = data;
  console.log(currencies);

// Makes an array with all the keys in currencies.rates and then uses that
  Object.keys(currencies.rates).forEach(function (key, index) {
    // Appends a new table element with currency info
    document.getElementById('currencyList').innerHTML += (
      `<tr><td>${key}</td><td>${currencies.rates[key]}</td></tr>`
    );
  });

}