[For English - click here](https://translate.google.com/translate?sl=sv&tl=en&u=https://github.com/Majvall/dooli-work-test/tree/main/programming/student)

# Kodtest interaktivt formulär med JS, HTML & CSS:

## Beskrivning
- Återskapa ett liknande resultat som på bilden "images/mockup.png"
- Använd valfritt någon av: Vue, jQuery, native JS.
- Målet är att knappen från början är disabled (oklickbar) och när man skrivit in ett korrekt personnummer ska knappen bli klickbar.


## Färger
- Vit: #FFF
- Grå: #EEE
- Mörkblå: #22255a
- Disabled knapp är Mörkblå men med CSS-koden opacity: 0.5


## Bilder som ska användas i koden
- images/account.svg
- images/arrow_right_white.svg


## Verifiering av personnummer
- YYYYMMDD-XXXX  12 siffror med bindestreck
- YYYYMMDDXXXX   12 siffror
- YYMMDD-XXXX    10 siffror med bindestreck
- YYMMDDXXXX     10 siffror

- Allt annat ska räknas som felaktigt personnummer.
- En mer komplicerad (verklig) lösning, d.v.s med Luhn-algoritmen behövs inte göras.


## Relevanta Events
- "onkeyup" alternativt "input"
- "click"


## CSS
- Det behöver absolut INTE vara pixel-perfect, fokusera istället på "korrekt layout" (vad som är positionerat bredvid vad osv).

<details>
  <summary>[Spoiler] Tips på CSS-egenskaper att använda</summary>

```
- border-radius
- background-color
- color
- margin
- padding
- grid eller flex
- font-size
- width
```
</details>


## Förbjudna CSS-egenskaper
- position: absolute | sticky | fixed;
- float: any;
- display: table;

