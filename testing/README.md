# Arbetsprov Mjukvarutestare

For English: contact us.

## Mål
1. Skapa ett automatiserat test som **lyckas** att gå genom processen för att registrera en giltig leverantör med minst 1 profil/kategori.
2. Skapa ett automatiserat test som **misslyckas** att gå genom processen för att registrera en leverantör med ett ogiltigt 10-siffrigt organisationsnummer.

Att skapa ytterliggare tester för t.ex ogiltiga namn/email-adresser och andra fel som användaren kan begå behövs *inte* göras som en del av arbetsprovet.


## Data
För att kunna utföra detta prov krävs en **cypress.json** fil, filen skickas ut via mail/discord av doolis personal och ska läggas i samma mapp som denna README-fil.

För att gå genom registreringen krävs tfn-nummer, org-nr etc, exempeldata för dessa kan du hitta här:
- [personuppgifter](https://fejk.se/) - refresha för fler
- [organisationsnummer](https://www.allabolag.se/what/Eriksson%20AB) - sök på valfritt namn


## Verktyg & Guider
### Cypress
Cypress är likt Selenium (men bättre), för att komma igång med det så läs följande:
- [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)


Som en del av Cypress framework finns det en del andra populära testbibliotek integrerade från start.
För att utföra arbetsprovet krävs det att man kan *lite av grunderna* i dessa, du kan läsa mer om de här:
- [Mocha basics](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha)
- [Chai jQuery](https://docs.cypress.io/guides/references/assertions.html#Chai-jQuery)
- [Chai assertions](https://docs.cypress.io/guides/references/assertions.html#Chai)


## Installation
1. För att kunna skriva testerna krävs en text-redigerare, **VSCode** rekommenderas.
2. För att kunna köra testerna krävs **nodejs** (minst version 10, helst vresion 14.15.5) & **npm** (följer automatiskt med i nodejs-installationen).
3. Med detta installerat kör `npm i` (npm install) i valfri terminal.
4. Efteråt kör `npm start` i valfri terminal.
5. [En mer detaljerad guide hittar du här](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

## Kvalitet

### Kodkvalité
För arbetsprovet finns det så gott som inga krav för kodkvalitet.

På LiA:n kommer det däremot finnas en del krav, dessa kommer förmedlas skriftligt på plats.

### Testkvalité
För arbetsprovet krävs det att testerna 1 & 2 går att utföra utan några konstigheter som "sleep"/timers, onödiga refreshes i browsern osv.

D.v.s de ska helt enkelt vara straight-forward, enkla att förstå och ska tydligt visa resultatet success eller failture.

För LiA:n kommer det finnas högre krav på tester.
De ska bl a dokumenteras, ha tydliga error-meddelanden, vara uppdelade i flertalet filer, ha så lite duplicerad kod som möjligt m.m.
Mer info om detta på plats.


### Frågor
Fråga din kontaktperson på dooli via mail eller discord om du har några förundringar, att ställa generella frågor om arbetsprovet påverkar inte ditt resultat.
