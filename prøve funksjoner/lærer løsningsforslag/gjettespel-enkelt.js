// Hentar ut elementa me treng å kunne referere til.
var p_resultatUt = document.getElementById("p_resultatUt");
var btn_startSpel = document.getElementById("btn_startSpel");
var kopp1 = document.getElementById("kopp1");
var kopp2 = document.getElementById("kopp2");
var kopp3 = document.getElementById("kopp3");

// Brukes for å lagre bak kva kopp "premien" ligg, om det var nært, og kva forslag brukaren gjer.
var liggBak = 0;
var forslag = 0;
var ohsoclose = 0; // Har brukaren vore nære på å gjette riktig? Sjå resultatfunksjonen for bruk

// Lyttefunksjonar til knappar og bileta (koppane)
btn_startSpel.onclick = f_oppstart;
kopp1.onclick = f_gjettKopp1;
kopp2.onclick = f_gjettKopp2;
kopp3.onclick = f_gjettKopp3;

// Startar spelet
f_oppstart();

// Køyrer ved oppstart og dersom ein vil starte spelet på nytt
function f_oppstart(){
    liggBak = f_plasserMynt(); // Legg premien bak ein ny tilfeldig kopp
	forslag = 0;
    ohsoclose = 0;
	p_resultatUt.innerHTML = "Trykk på den koppen der du trur mynten ligg!";
	btn_startSpel.style.visibility = "hidden";
	kopp1.src = "bilder/kopp.png";
	kopp2.src = "bilder/kopp.png";
	kopp3.src = "bilder/kopp.png";
	p_resultatUt.style.backgroundColor = "whitesmoke";
	p_resultatUt.style.color = "black";
}

// Genererer ein plassering for mynten, som indikerer om det ligg bak kopp 1, 2 eller 3
function f_plasserMynt() {
	// Genererer eit tilfeldig tal mellom 1 og 3 og returnerer det deretter
	var tilfeldig = Math.floor((Math.random()*3)+1);
	return tilfeldig;
}

// Testar om den koppen brukaren har valgt er den korrekte.
// Gjer og tilbakemelding om det er nært eller langt frå.
function f_resultat() {
    // Tester om resultatet er riktig og gjer tilbakemelding
    if(forslag === liggBak) {
        p_resultatUt.innerHTML = "Gratulerar!";
        // Plasserer mynt
        if(liggBak===1 && forslag===1) {
            kopp1.src = "bilder/mynt.png";
            }
            else if(liggBak===2 && forslag===2) {
                kopp2.src = "bilder/mynt.png";
            } else if(liggBak===3 && forslag===3) {
                kopp3.src = "bilder/mynt.png";
            }
            else {
                console.log("Mynten blei ikkje plassert nokon plass.");
            }
            p_resultatUt.style.backgroundColor = "green";
            p_resultatUt.style.color = "white";
    }
    else {
        p_resultatUt.innerHTML = "Feil!";
        p_resultatUt.style.backgroundColor = "red";
        p_resultatUt.style.color = "white";
	}

    // Visninga av om ein er nært riktig svar eller ikkje ligg i eigen funksjon
	f_ohSoClose(liggBak,forslag);
    // Gjer det mogleg å starte spelet på nytt
	btn_startSpel.style.visibility = "visible";
}

// Ein tilbakemelding om ein var nært riktig resultat eller ikkje.
// Her kunne du brukt if-else òg.
function f_ohSoClose(a,b) {
	var plassering = a;
	var gjett = b;
	var naerleik = plassering - gjett;
	switch(naerleik) {
		case 0: 
            console.log("Gjetta riktig: " + naerleik); 
			p_resultatUt.innerHTML += ".. Heilt rett.";
			break;
		case 1: 
        case -1:
            console.log("Oh, so close: " + naerleik); 
            p_resultatUt.innerHTML += ".. Du var nære.";
			break;
		case 2:
        case -2:
            console.log("Elendig gjetta: " + naerleik);
            p_resultatUt.innerHTML += ".. Langt frå rett!";
			break;
	}
}

// Funksjonar som set gjettinga til brukaren til variabelen forslag, og deretter kallar på
// funksjonen som sjekkar resultatet.
function f_gjettKopp1(){
    forslag = 1;
    f_resultat();
}
function f_gjettKopp2(){
    forslag = 2;
    f_resultat();
}
function f_gjettKopp3(){
    forslag = 3;
    f_resultat();
}