# FantaSuperLega

FantaSuperLega è una piattaforma web MVP per gestire una lega fantacalcio: classifica, squadra, mercato, calendario e statistiche.

## Funzionalità

- Classifica della lega
- Dettaglio squadre
- Mercato dei calciatori
- Prossime partite
- Dashboard riepilogativa
- API REST semplice per i dati

## Stack

- Node.js
- Express
- HTML/CSS/JavaScript
- Dati mockati in memoria

## Prerequisiti

- Node.js 18+
- npm

## Avvio

```bash
npm install
npm start
```

Apri il browser su:

```bash
http://localhost:3000
```

## Struttura del progetto

```text
.
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## API

### GET /api/league
Restituisce la struttura completa della lega.

## Sviluppo

Per avviare in modalità sviluppo con riavvio automatico:

```bash
npm run dev
```

## Note

Questo è un MVP iniziale pensato per essere facilmente esteso con:
- autenticazione utente
- database reale
- gestione mercato
- calendario dinamico
- salvataggio squadre
