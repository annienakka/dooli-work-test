[For English - click here](https://translate.google.com/translate?sl=sv&tl=en&u=https://github.com/Majvall/dooli-work-test/tree/main/programming/backend)

# Backend - Simpelt Kontoskapandeflöde

## Beskrivning
Skapa en backend som åtminstone har följande API-routes
- `/api/account/signup` (POST)
- `/api/account/login` (POST)
- `/api/account/logout` (GET)
- `/api/user` (GET, gets a list of all users)
- `/api/user/exists?pnr=...` (GET, returns true if user exists)

Content-Type: application/json

Sessioner ska finnas för inloggade användare, detta ska hanteras med JWT och ska skickas via en HTTP-Header.

Endast inloggade användare ska få lov att anropa `user` och `logout`.

Endast utloggade användare ska få lov att anropa `signup`, `login` och `exists`.

- Om ett konto för angivet personnummer redan existera ska användaren få en error som berättar det samt att de har möjligheten att logga in istället.

Skapa en extremt simpel frontend (se nedan) som verifierar att din backend fungerar, inga externa bibliotek får användas i frontendkoden.

Validering av användardata skickad till ditt API ska utföras.

Användarens pnr (personnummer) ska vara unikt bland användare.

Använd regexp för pnr-validering, att födelsedatumet är "verkligt" behöver du ej validera.

---

## User Model
```ts
{
  // YMDX = numeric (0-9)
  pnr: "YYMMDDXXXX" | "YYMMDD-XXXX" | "YYYYMMDDXXXX" | "YYYYMMDD-XXXX",
  givenName: string,
  surname: string,
  acceptsMarketing: boolean,
  gender: "Male" | "Female" | "Other",
}
```
Du får lägga till fler attribut till User modellen om du vill.

---

## Tech-stack
- Node.js
- Express
- HTTP (ej S)
- 1 av följande databaser: Neo4J, MySql, MongoDB, Redis.
- JWT (JSON Web Token)
- Valfria npm-moduler får användas

---

## Frontend tips
##### index.html
```html
<html>
  <head>
    <script defer src="main.js"></script>
  </head>
  <body></body>
</html>
```
##### main.js
```js
// After having performed a successful GET to /api/user:
users.forEach(user =>
  document.body.insertAdjacentHTML('beforeend',
    `<p>User: ${user.givenName} ${user.surname}</p>`
  )
);
```

---

## Kodkvalité
- All kod, inklusive CSS:n ska vara refaktorerad (välskriven).
  - DRY
  - Inga kommentarer i koden, koden ska tala för sig själv (lättlästa & tydliga namngivningar).

---
## Slutresultat
Deadline: 1 vecka - men förväntad utvecklingstid är 1 dag.

Skicka ditt resultat till oss när du är klar.

Om du har några frågor angående testet så ställ de snarast.

---

Lycka till!