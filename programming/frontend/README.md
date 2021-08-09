[For English - click here](https://translate.google.com/translate?sl=sv&tl=en&u=https://github.com/Majvall/dooli-work-test/tree/main/programming/frontend)

# Frontend - Skapa konto & Logga in

## Beskrivning
- Skapa ett formulär där man kan skriva in sina uppgifter och om dessa är giltiga skicka iväg det för att skapa ett konto
- När ett konto har skapats ska detta visas för användaren och sparas i localStorage.
- Om ett konto för angivet personnummer redan existera ska användaren få en error som berättar det samt att de har möjligheten att logga in istället.
- "Logga in"/"Skapa konto"-knappen ska vara disabled (oklickbar) tills man har skrivit in giltig data i input-fälten.
- För att logga in ska man endast behöva skriva in personnummer.
- När man blivit inloggad ska formuläret försvinna och man ska kunna se en lista på användare som är skapade sen tidigare (inkl sig själv).

---

## Välj 1 av följande Frameworks
- Vue.js
- <span class=”notranslate”>Svelte</span>
- React.js
- Aurelia

---

## Design
- Modern UX https://www.google.com/search?q=modern+input&&tbm=isch
  - Välj valfri stil, storlek & färger. Overall ska det vara ganska modernt (se google-länken ovan för exempel, klicka gärna in på sökresultaten).
- Använd inga externa CSS-frameworks

---

## Validering av personnummer
|||
| ------------- | ------------- |
| YYYYMMDD-XXXX | 12 siffror med bindestreck |
| YYYYMMDDXXXX  | 12 siffror                 |
| YYMMDD-XXXX   | 10 siffror med bindestreck |
| YYMMDDXXXX    | 10 siffror                 |
|||

- Allt annat ska räknas som felaktigt personnummer.
- Ifall användaren skriver in 10 siffror så ska 19 eller 20 läggas till i början
  - Antaga att användaren är minst 10 år gammal och yngre än 110 år.
- YY = 01-99,   MM = 01-12,   DD = 01-31,   X = 1-9
  - Validering för rätt antal dagar på skriven månad behövs inte göras.
- Luhn-algoritmen (validering av personnumrets 4 sista siffror) behövs inte göras.

---

## Validering av andra fält (Namn, Address, etc)
- Ska göras med godtagbar kvalité.
  - Alla möjliga valideringar måste inte hanteras men inte heller "så gott som inget".

---

## Kodkvalité
- All kod, inklusive CSS:n ska vara refaktorerad (välskriven).
  - DRY
  - axios är förbjudet, använd fetch.
  - Inga kommentarer i koden, koden ska tala för sig själv (lättlästa & tydliga namngivningar).
- Skriv ingen onödig CSS (IE-kompatibilitet, default-values etc).
- Undvik att använda < form > med anledningen att du skall visa att du kan hantera input-data, POST etc själv.

---

## Förbjudna CSS-egenskaper
- position: absolute | sticky | fixed;
- float: any;
- display: table;

---
## Slutresultat
Deadline: 1 vecka, bör dock max ta 3 dagar.

Skicka ditt resultat till oss när du är klar.

Om du har några frågor angående testet så ställ de snarast.

---

Lycka till!