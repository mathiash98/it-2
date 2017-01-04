# Informasjonsteknologi 2

Heldagsprøve i IT2 25.11.16
Oppgavene ligger i hver sin undermappe med alle filer som trengs.
Åpne index.html i hver mappe så får du se herlighetene

```
Ingen spesielle dependencies her
```

Oppgavetekst
```
Programmeringsprøve IT2
25. november 2016
Klokka 8.15-13.15.


Alle hjelpemiddel er tillatt, med unntak av kommunikasjon (inkluderer å samarbeide). Du bør begrense deg til boka og W3Schools.com for å øve til eksamen.
Generell informasjon og vurdering
Du skal løyse oppgåvene slik dei er presentert. Dersom du av ulike grunnar vel andre løysningar må du passe på å få vist same kompetanse på annan måte. Du skal utnytte dei teknikkane me har lært om, til dømes strategisk bruk av ulike variablar (til dømes tekst, tal og arrays), if-setningar, løkker osv. Der du gjer tilpassingar må du begrunne og forklare dette i kommentarane dine. Har du behov for større mengder tekst skriv du i eit eige tekstdokument.


Krav til kode: Strukturert og ryddig satt opp, med ein gjennomgåande måte å gjere det på. Du skal kommentere koden. Variabelnavn og andre element skal ha sjølvforklarande navngjeving og fylgje ein standard.


Krav til presentasjon: Koden du skriv skal plasserast inn i eit heilhetleg design (HTML+CSS), der du typisk vel eit design som er midtstilt og byr på eit godt fokus på innhaldet, med til dømes god kontrast/lesbarhet på tekst. Det skal vere luft mellom element og balansen skal vere god.


Krav til innlevering: Du skal jobbe i ei mappe med god struktur. Når du skal levere inn komprimerer du denne mappa, med alt innhaldet, og leverer inn den via Classroom. Dette er òg ein del av vurderinga du får.


Kompetansemål:
lese og bruke dokumentasjon og kode
definere variabler og velge hensiktsmessige datatyper
tilordne uttrykk til variabler
programmere med enkle og indekserte variabler eller andre kolleksjoner av variabler
programmere med valg og gjentakelser
utvikle og sette sammen delprogrammer
teste og finne feil i programmer ved å bruke vanlige teknikker
planlegge og utvikle multimedieapplikasjoner ved å kombinere egne og andres multimedieelementer av typene tekst, bilde, lyd, video og animasjoner
bruke programmeringsspråk i multimedieapplikasjoner
vurdere og bruke relevante filformater for tekst, bilde, lyd, video og animasjoner
vurdere multimedieprodukter med hensyn til brukergrensesnitt og funksjonalitet
Oppgåve 1: “Kva kan eg køyre?”
Lag eit program som lar brukaren skrive inn alderen sin og som så får ein visuell og skriftleg tilbakemelding med kva køyretøy han eller ho kan bruke.


Eksempelvis: Brukaren skriv inn talet «18» – noko som gjer at han eller ho kan køyre moped, bil og varebil. Då skal programmet vise eit bilete av alle desse køyretøya, i tillegg til ein kort tekst som oppsummerer dette.


Resten av reglane du skal legge inn:
15 eller yngre: Ikkje gammal nok til noko
16 eller eldre: Moped, eller lett motorsykkel
18 eller eldre: Personbil, varebil (+ alt over)
21 eller eldre: Buss (+ alt over)


Presenter innhaldet på en oversiktelig og god måte. Bileta skal vere tilpassa på ein fornuftig måte, med tanke på til dømes format, størrelse og oppløysning.
Oppgåve 2: Hopprenn
Du skal lage eit program som reknar ut poengsummar under eit hopprenn. For å gjere det litt enklare ser me for oss at alle operasjonar blir gjort på same skjerm, det vil sei at både inntasting av alle nødvendige verdiar og resultatet kjem same plass.


Hoppreglane er som følger:
Eit kvart hopp har ein lengde i antall meter, og stilkarakterar frå 5 ulike dommerar.
Lengdepoenga reknast ut slik at for kvar meter over K-punkt skal ein få poeng i form av meterverdien, pluss ein grunnpoengsum lik 60.
Formelen blir då lengdePoeng = 60 + meterverdi * (lengde – K-punkt).
Eksempelvis vil du dersom du hoppar 123 meter i ein bakke med K-punkt på 120 meter og meterverdi på 1.8 få 65.4 poeng.
Stilpoeng reknast ut slik at 5 ulike dommerar gjer sine karakterar mellom 0 og 20, med intervall på 0.5. Det vil sei at ein til dømes kan gje 14.5 og 18, men ikkje 14.23 osv. Når alle har gjort dette skal høgaste og lågaste karakter strykast. Det er altså berre dei 3 karakterane ”i midten” som er med i endeleg poengsum.
Total poengsum reknast ut ved at du tek lengdepoenga og legg saman med stilpoenga.


Krav:
Du skal bruke ein tabell (eller liknande kolleksjon av data) for å ta vare på dommarkarakterane.
Du skal sortere tabellen, der du kan bruke http://www.w3schools.com/js/js_array_sort.asp som hjelp til dette.
Du skal bruke ei løkke for å hente ut dei tre (3) poengsummane i midten (etter at høgaste og lågaste poengsum er strøket). Dersom du vel ein annan (enklare) strategi får du ikkje like høg uttelling.


Her er ei utskrift av korleis programmet typisk skal oppsummere etter at brukaren har ført inn dei ulike data du blir bedt om:

Oppgåve 3: Teikning
Fyll ein tabell med fem (5) tilfeldige tal, der desse skal vera mellom 1 og 20. Bruk ei løkke for å få dette til.


Basert på data over skal du teikne inn desse verdiane inn i eit canvas-element. Du skal sjølv vurdere kva du må gjere for å få dette inn på ein mest mogleg hensiktsmessig måte. Generelt gjeld det at du må fordele data (grafikken) utover canvas-elementet (der du til dømes ikkje skal ende opp med at alt ligg tett inntil eine sida med mykje luft på den andre).


Merk at det i grafikken under er teikna inn linjer mellom “ytterpunkta” (dei fem tilfeldige verdiane).





Legg til eit rutenett i teikninga over der du bruker løkker for å løyse dette. Visninga under ender nok opp med å gje litt mykje støy, så du kan eventuelt ha større ruter. Du vel sjølv hensiktsmessige verdiar.

NB: Som i dei andre oppgåvene ber eg om at du løyser oppgåva på ein enklare måte dersom det er noko som byr på problem med oppgåveteksten, der du kommenterer dette i koden.
Bonusoppgåve: Frivillig
Dette er ei oppgåve som er med i tilfelle du føler du har “møtt veggen” på ein av dei tidlegare oppgåvene, eller har lyst til å vise meir av det du kan.


Du skal lage eit program som med så få linjer som mogleg skriv ut songen “99 bottles of beer on the wall..”. For å gjere det heile litt meir stovereint så kan du byte ut “beer” med “julebrus”.


Utskrifta skal sjå omtrentleg slik ut:
99 bottles of julebrus on the wall, 99 bottles of julebrus.
Take one down and pass it around, 98 bottles of julebrus on the wall.
98 bottles of julebrus on the wall, 98 bottles of julebrus.
Take one down and pass it around, 97 bottles of julebrus on the wall.
...


Lykke til!

```
