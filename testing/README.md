# Arbetsprov Mjukvarutestare

[For English - click here](https://translate.google.com/translate?sl=sv&tl=en&u=https://github.com/Majvall/dooli-work-test/tree/main/testing)

## Mål
1. Skapa ett automatiserat test som **lyckas** att gå genom processen för att registrera en giltig leverantör med minst 1 profil/kategori.
2. Skapa ett automatiserat test som **misslyckas** att gå genom processen för att registrera en leverantör med ett ogiltigt 10-siffrigt organisationsnummer.

Att skapa ytterliggare tester för t.ex ogiltiga namn/email-adresser och andra fel som användaren kan begå behövs *inte* göras som en del av arbetsprovet.

## Deadline
1 vecka från start, denna långa tid är för att man som sökande ska kunna göra provet när man får en paus från barn/studier/jobb, t.ex på en helg.
Provet förväntas göras på mindre än **1 heldag**, för juniorer är det max **3 heldagar**.

## Data
För att kunna utföra detta prov krävs en **cypress.json** fil, filen skickas ut via mail/discord av doolis personal och ska läggas i samma mapp som denna README-fil.

För att gå genom registreringen krävs tfn-nummer, org-nr etc, exempeldata för dessa kan du hitta här:
- [personuppgifter](https://fejk.se/) - refresha för fler
- [organisationsnummer](https://www.allabolag.se/what/Eriksson%20AB) - sök på valfritt namn


## Verktyg & Guider

### Cypress
Cypress är likt Selenium (men bättre), för att komma igång med det så gör följande:
- [Cypress - Getting Started](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)


Som en del av Cypress framework finns det en del andra populära testbibliotek integrerade från start.
För att utföra arbetsprovet krävs det att man kan *lite av grunderna* i dessa, du kan läsa mer om de här:
- [Mocha basics](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha)
- [Chai jQuery](https://docs.cypress.io/guides/references/assertions.html#Chai-jQuery)
- [Chai assertions](https://docs.cypress.io/guides/references/assertions.html#Chai)

### Language
We write our tests with JavaScript and in English.

## Installation
1. Forka gärna ned detta GitHub-repo och utgå ifrån den. Annars kan du välja att klona repo:t eller skapa ett helt eget projekt från grund. ![how-to-fork-github-repo](https://github.com/Majvall/dooli-work-test/blob/main/how-to-fork-github-repo.png)
1. För att kunna skriva testerna krävs en text-redigerare, **VSCode** rekommenderas.
1. För att kunna köra testerna krävs **nodejs** (version 14.9) & **npm** (följer automatiskt med i nodejs-installationen).
1. Med detta installerat kör `npm i` (npm install) i valfri terminal.
1. Efteråt kör `npm start` i valfri terminal.
1. Cypress GUI bör nu öppnas, i den kan du klicka på det test du vill ska köras, t.ex: landing_page.spec.js
1. [En mer detaljerad guide hittar du här](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)


## Kvalitet

### Kodkvalité
För arbetsprovet finns det så gott som inga krav för kodkvalitet.

### Testkvalité
För arbetsprovet krävs det att testerna 1 & 2 går att utföra utan några konstigheter som "sleep"/timers, onödiga refreshes i browsern osv.
Att använda { timeout: 15000 } där det behövs är absolut okej.

D.v.s de ska helt enkelt vara straight-forward, enkla att förstå och ska tydligt visa resultatet success eller failure.

### At the workplace
För arbete som anställd eller praktikant kommer det finnas högre krav på tester.
De ska bl a dokumenteras, ha tydliga error-meddelanden, vara uppdelade i flertalet filer, ha så lite duplicerad kod som möjligt m.m.
Mer info om detta på plats.


## Frågor
Fråga din kontaktperson på dooli via mail eller discord om du har några förundringar, att ställa generella frågor om arbetsprovet påverkar inte ditt resultat.
