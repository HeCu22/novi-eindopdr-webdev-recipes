# Installatie Handleiding Cookin'Moods
Webapplicatie voor ReceptKeuze,
Versie 2.0

## Inhoudsopgave

1. Inleiding
2. Lijst van benodigdheden om de applicatie te kunnen gebruiken
3. Randvoorwaarden
4. Andere beschikbare npm commando’s
5. Stappenplan


## Inleiding

Er zijn natuurlijk al heel veel applicaties te vinden via welke je een recept kan zoeken en ook via google vind je waarschijnlijk al heel veel. Maar een recept zoeken afhankelijk van je stemming is misschien toch wel heel gemakkelijk, vooral als je niet zoveel zin hebt om te koken en snel een recept tevoorschijn wil toveren.
De applicatie ‘Cookin’Moods’ kan hier misschien bij helpen. Op het onderstaande hoofdscherm wordt je als eerste gevraagd hoe het met jouw kook-energie is. Misschien heb je gewoon een bepaalde kook-stijl en zoek je daar iets bij.

Via het startmenu wordt naar de stemming van de gebruiker gevraagd door aan te vragen in welke ‘Cookin’Mood men is en door te klikken op een van de drie afbeeldingen met beschrijvende steekwoorden ernaast, kan men dit aangeven. 
De keuzes die hij heeft zijn:

1. nieuwe recepten of recepten van een specifieke keuken,
2. snelle gemakkelijke recepten waar men tevens de optie heeft ‘gezonde’ recepten uit te filteren.
3. of een recept op basis van ingrediënten in huis.

Door te klikken op één van icoontjes, komt men op een vervolgmenu waar men de keuze verder kan specificeren. 
* Via de Menu Cuisine, kan men een of meerdere keukens aanvinken en/of een woord in een recept-titel invullen of de naam van een receptenschrijver invullen met eventuele tags.
* Via de onderste icoontje kan men een snel en gemakkelijk recept zoeken, door het type gerecht aan te vinken en de ‘maximale bereidingstijd’ van het recept. Via de ‘Whole 30’ kan men waarborgen dat de getoonde recepten voldoen aan de ‘gezonde’ maaltijdschijf.
* Via de middelste optie kan men zoeken op basis van ingrediënten, die men eventueel al in huis heeft.
* Heeft men een aantal opties ingevuld, en op de button ‘start zoeken’ geklikt, dan gaat de gebruiker naar het vervolgscherm met een lijst van de gevonden recepten.

* Als men een van de recepten in het overzicht selecteert, gaat de user naar het detail scherm, waar informatie staat over de ingrediënten en de instructie hoe het recept te maken. Tevens staat de ‘cookin’time’ erbij en voor hoeveel personen het recept is geschreven, de naam van de eventuele receptenschrijver en de health-score. Tevens is er nog een algemene ‘Summary’ op het eind.


![screenshot](./src/assets/screenshots/screenshot-main.jpg)

## Lijst van benodigdheden om de applicatie te kunnen gebruiken: 

* API key

Bij deze applicatie maak ik gebruik van HTTP requests naar de Spoonacular API (https://spoonacular.com/food-api/docs) om zo de juiste data op te vragen en te verwerken in mijn applicatie. De documentatie over de verschillende endpoints kun je hier vinden.
In deze api is vooral gebuik gemaakt van Search Recipes’ (complex search), ‘Search Recipes by ingredients’ en ‘Search Recipes bij Id’.


NPM en Parcel zijn al geconfigureerd, de bijbehorende dependencies moet men wel nog  installeren. 
Omdat er al een package.json aanwezig is in het bestand, kun je dit doen met het volgende (globale) commando:

* npm install

Alle benodigde dependencies worden dan binnengehaald! Als je de applicatie wil starten, doe dat dan met het volgende commando:
* npm run start

Axios staat ook in de package.json en het is dus niet meer nodig om het te installeren.
 


## Randvoorwaarden

* Webstorm moet geïnstalleerd zijn op de computer om al de genoemde ‘terminal’ commando’s te kunnen uitvoeren. Webstorm is de IDE (Integrated Development Environment)die gebruikt is om code in te programmeren. De structuur van de webpagina’s is opgezet met behulp van HTML versie 5, en de styling is gebeurd met CSS. Met Javascript is er logica aan toegevoegd voor de interactie met de gebruiker.
* De code is beheerd met behulp van GIT. 
GIT is het VCS, distributed version control system, dat gebruikt is. De applicatie staat op een GITHUB repository, en dus is het handig als GIT geïnstalleerd is op je computer om de applicatie te kunnen clonen in Webstorm. 

* Op basis van de informatie uit de Spoonacular API, moet er een API key gebuikt worden. In elke javascript met een fetch erin heb ik de een API key staan die ik volgens mijn user profile mag gebruiken.

Dit is dus van belang voor de volgende javascript bestandjes:
* fetchCuiRecipes.js
* fetchDetails.js
* fetchFastRecipes.js
* fetchRecipeByIngredients.js


## Andere beschikbare npm commando’s

De volgende NPM commando’s zijn ook beschikbaar en kun je afhankelijk van bepaalde situatie ook nog gebruiken:
* npm -v

Checken of NPM geïnstalleerd is via commando in de terminal van webstorm. 
Als het geinstalleerd is, zie je vervolgens het nummer van de huidige geïnstalleerde versie op je computer, zoals bijvoorbeeld 6.4.1.
* npm init

NPM initialiseren als NPM nog niet geconfigureerd is.

* npm i parcel --save-dev
Parcel installeren

* npm i parcel-plugin-nuke-dist --save-dev
Parcel plugin Nuke Distribution installeren. 
Vervolgens om dat parcel nog niet geconfigureerd was moet de men de Script tag vervangen in package.json 
"scripts": { "start": "parcel src/index.html", "build": "parcel build src/index.html" }

* npm i axios
Als Axios nog niet geconfigureerd is en als je een request wil maken naar een API dan kun je hiervoor Axios installeren. Dit moet je doen als Axios nog niet in je package.json staat. 
* node -v

Node kan men gebruiken als run-time engine om Javascript code buiten de browser uit te voeren. Installeren van Node.js kan via deze website. Met dit commando test je of de installatie succesvol was. Als Node.js aanwezig is zul je een versienummer te zien krijgen, zoals bijvoorbeeld v13.9.3.
* node voorbeeld.js

Als node.js aanwezig is kan men een Javascript code bestand uitvoeren en output zien in de terminal van webstorm via console.log. 
* npm install -g nodemon

‘nodemon’ installeren, een extensie die ervoor zorgt dat JavaScript één keer aanroepen resulteert in een run bij elke save.
* nodemon voorbeeld.js

javascript bestandje uitvoeren in de terminal direct nieuwe output in jouw terminal zien verschijnen als je het javascript bestand aangepast. Stoppen met CTRL + C.
* Set-ExecutionPolicy RemoteSigned

Als je geen administrator gebruiker dan deze extensie toevoegen
 


## Stappenplan

Om de applicatie Cookin’Moods te installeren op een laptop of personal computer, moeten na de installatie van Webstorm de volgende stappen ondernomen worden.
 
1. Webstorm:
Creëer een nieuw project in Webstorm met “Create new project from version control”;
2. GitHub:
‘Copy’ de repository link van het project dat beschikbaar is onder:
     HeCu22/novi-eindopdr-webdev-recipes (github.com) https://github.com/HeCu22/novi-eindopdr-webdev-recipes
3. Webstorm: 
New project from Version Control,
‘Paste’ de url sub 2. in Webstorm in de popup om een nieuw project ‘from version control’ te creeren,
    Click button: 
    clone
    Click: 
    confirm trusting 
    Selecteer: 
    new window 
4. Webstorm Terminal:
    Verwijder de link met de remote en type het comando:
    git remote remove origin
	 
5. Webstorm Terminal:
· enter het commando:
npm install
· wacht tot ‘ready’
· run ‘npm audit fix’ if still vulnerabilities found
· vervolgens run met commando:
    npm run start
· vervolgens click op de link die dan wordt gegeven: Bijvoorbeeld: ‘https://local host:1234’
· Vervolgens zie je het hoofdmenu van Cookin’Moods

