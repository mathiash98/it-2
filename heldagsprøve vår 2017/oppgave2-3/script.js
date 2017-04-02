var steder = new Map()
.set('Lønahorgi', {
  skredfare: 3,
  fylke: 'Hordaland',
  kommentar: 'Flakskred.'
})
.set('Oksen', {
  skredfare: 0,
  fylke: 'Hordaland',
  kommentar: 'Flotte forhold'
})
.set('Lofoten', {
  skredfare: 1,
  fylke: 'Nord-Norge',
  kommentar: 'Løssnøskred'
})
.set('Lyngen', {
  skredfare: 2,
  fylke: 'Nord-Norge',
  kommentar: 'Mykkje våt snjo.'
})
.set('Sognefjorden', {
  skredfare: 4,
  fylke: 'Sogn og Fjordane',
  kommentar: 'Ekstremt våt snø. Bruk vannski.'
})
;

var skredFareTekst = ['Liten', 'Moderat', 'Betydelig', 'Stor', 'Meget stor'];

// Kjører rendring av table første gang med map steder som input
renderTableVarsel(steder);

function renderTableVarsel(inMap) {
  // Skriver ut table med verdier fra map som blir matet inn
  var tableVarselBody = document.getElementById('tableVarselBody');
  tableVarselBody.innerHTML = '';
  inMap.forEach(function (val,key) {
    tableVarselBody.innerHTML += `
      <tr id="varselBodyRow_${key}">
        <td>${key}</td>
        <td>${val.fylke}</td>
        <td>${val.kommentar}</td>
        <td class="skredFareFarge_${val.skredfare} text-white text-center" title="${skredFareTekst[val.skredfare]}">${val.skredfare}</td>
        <td><button class="btnEndreVarsel" onclick='endreVarsel(varselBodyRow_${key})'>Endre</button></td>
      </tr>
    `;
  });
}

function endreVarsel(row) {
  // Setter alle table cellene til input felt med value lik opprinnelig verdi
  var tableCells = row.querySelectorAll('td');
  var currentObject = {
    sted: tableCells[0].innerHTML,
    fylke: tableCells[1].innerHTML,
    kommentar: tableCells[2].innerHTML,
    skredfare: tableCells[3].innerHTML
  };
  // Setter de nye table cellene
  tableCells[0].innerHTML = `<input name="sted" type="text" value="${currentObject.sted}" placeholde="Navn på sted"></input>`;
  tableCells[1].innerHTML = `<input name="fylke" type="text" value="${currentObject.fylke}" placeholde="Fylke"></input>`;
  tableCells[2].innerHTML = `<input name="kommentar" type="text" value="${currentObject.kommentar}" placeholde="Kommentar"></input>`;
  // #TODO: legg til tilbakemelding mens man skriver inn skredfare, farge, og hjelpebeskrivelse
  tableCells[3].innerHTML = `<input name="skredfare" type="number" data-gammelskredfare="${currentObject.skredfare}" value="${currentObject.skredfare}" placeholde="skredfare" max="4" min="0"></input>`;
  tableCells[4].innerHTML = `<button onclick='endreVarselLagre(varselBodyRow_${currentObject.sted})' class="btnLagre">Lagre</button>`;
}

function endreVarselLagre(row) {
  // Lagrer originalid, for å endre den gamle i map og endre id på tableVarselBodyRow_ID
  var originalId = (row.id).substring(14);
  // Henter fra alle barna til row med tagname td
  var tableCells = row.querySelectorAll('td');

  // Lagrer de nye verdier midlertidig
  var sted = tableCells[0].querySelector('input').value
  var newObject = {
    fylke: tableCells[1].querySelector('input').value,
    kommentar: tableCells[2].querySelector('input').value,
    skredfare: Number(tableCells[3].querySelector('input').value)
  };

  // Lagrer den gamle skredfaren for å kunne fjerne den gamle classNamen
  var gammelskredfare = tableCells[3].querySelector('input').dataset.gammelskredfare
  // Printer ut de nye verdiene
  // Kom på at jeg bare kunne callet funksjonen renderTableVarsel(), men da vil de nye verdiene havne på bunn om man har endret stedNavn
  // Tenkte litt for mye på databaser, hvor man ønsker å ha færrest mulig calls til server og derfor setter verdier på denne måten
  // Så slipper man å utføre en ny call til database, spørre om alle tall og så rendre på nytt
  tableCells[0].innerHTML = sted;
  tableCells[1].innerHTML = newObject.fylke;
  tableCells[2].innerHTML = newObject.kommentar;
  tableCells[3].innerHTML = newObject.skredfare;
  tableCells[3].classList.remove(`skredFareFarge_${gammelskredfare}`);
  tableCells[3].classList.add(`skredFareFarge_${newObject.skredfare}`);
  tableCells[3].title = skredFareTekst[newObject.skredfare];
  tableCells[4].innerHTML = `<button class="btnEndreVarsel" onclick='endreVarsel(varselBodyRow_${newObject.sted})'>Endre</button>`;
  row.id = `varselBodyRow_${newObject.sted}`;

  if (steder.has(originalId)) {
    // Sjekk om bruker har endret navn på stedet
    if (originalId != newObject.sted) {
      steder.delete(originalId);
      steder.set(sted, newObject);
    }
  };
}

function skredFareInput(el) {
  var skredFare = Number(el.value);
  var msg = `
  <div class="skredFareFarge_${skredFare} text-white">${skredFareTekst[skredFare]}</div>
  `;
  leggTilFormTilbakemelding(msg)
}

document.getElementById('formLeggTilVarsel').onsubmit = function (e) {
  e.preventDefault();
  console.log(this);
  if (steder.has(this.sted.value)) {
    // Log error
    leggTilFormTilbakemelding(`${this.sted.value} finnes allerede, så jeg endret bare verdiene.`)
  } else {
    leggTilFormTilbakemelding(`${this.sted.value} er lagt til.`)
  }
  steder.set(this.sted.value, {
    skredfare: Number(this.skredfare.value),
    fylke: this.fylke.value,
    kommentar: this.kommentar.value
  });
  console.log(steder.get(this.sted.value));
  // rendrer table på nytt med den nye input
  renderTableVarsel(steder);
}

function leggTilFormTilbakemelding(msg) {
  document.getElementById('formLeggTilVarselTilbakemelding').innerHTML = '';
  document.getElementById('formLeggTilVarselTilbakemelding').innerHTML = msg;
}

// Filtreringsfunksjon
document.getElementById('filtrerTableSkredfare').onsubmit = function (e) {
  e.preventDefault();
  // Lagrer verdien som skal filtreres mot
  var filtrerSkredfareVal = this.skredfare.value;
  console.log(filtrerSkredfareVal);
  // Sjekker om input er tom, hvis sant render hele tabellen
  if (filtrerSkredfareVal == "") {
    renderTableVarsel(steder);
  } else {
    // Hvis input har tall start å filtrer basert på kriterie som er valgt og sett i ny tmpMap
    var tmpMap = new Map();
    switch (this.comparer.value) {
      case '==':
        steder.forEach(function (val, key) {
          if (val.skredfare == filtrerSkredfareVal) {
            tmpMap.set(key, val);
          }
        });
        break;
      case '<':
        steder.forEach(function (val, key) {
          if (val.skredfare > filtrerSkredfareVal) {
            tmpMap.set(key, val);
          }
        });
        break;
      case '>':
        steder.forEach(function (val, key) {
          if (val.skredfare < filtrerSkredfareVal) {
            tmpMap.set(key, val);
          }
        });
        break;
    }
    // Render den nye tabellen med de filtrerte verdiene
    renderTableVarsel(tmpMap);
  }
}
function sortTable() {
  // Fikk ikke tid til å sortere, fant ut at det var litt vanskelig å sortere en map...
  // Får sjå om eg får lage en bedre versjon med sortering
}
function renderStatistikk() {
  // Tell antall steder med den og den skredfaren
  // Bruk element.style.height til å endre høyde på pillaren
}
