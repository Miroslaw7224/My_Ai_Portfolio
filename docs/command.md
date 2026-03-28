# Komendy do uruchomienia Portfolio

## Lokalne uruchomienie (Development)

Z głównego katalogu repozytorium (`Portfolio/`):

### Opcja 1: npm (zalecane)

```bash
npm start
```

Serwer statyczny na [http://127.0.0.1:8000](http://127.0.0.1:8000) (skrypt w `package.json`).

### Opcja 2: Python HTTP Server

```bash
python -m http.server 8000
```

### Opcja 3: Live Server (VS Code)

1. Rozszerzenie „Live Server”
2. PPM na `index.html` → Open with Live Server

### Opcja 4: npx serve (bez package.json)

```bash
npx serve . -l tcp://127.0.0.1:8000
```

Na Windows w **PowerShell** do otwarcia pliku bez serwera: `Start-Process .\index.html`

---

## Konwencja plików (jedna wersja)

- **Zrzuty ekranu i grafiki projektów** — wyłącznie w **`docs/images/`** (strony w `projects/*.html` odwołują się stamtąd).
- **Pełne analizy HTML i notebooki** — w **`docs/projects/<nazwa>/`** (np. `Titanic`, `Iris`), linkowane z kart projektów w `projects/*.html`.
- Nie duplikuj folderu `images/` w katalogu głównym repozytorium.

---

## Deployment na GitHub Pages

Push do `main`/`master` uruchamia workflow `.github/workflows/deploy.yml` (całe katalogi główne repozytorium).

---

## Struktura projektu

Rekordy decyzji architektonicznych (ADR): **`docs/adr/`** (numeracja plików `0001-…`).

```
Portfolio/
├── index.html
├── package.json
├── projects/                 # Podstrony projektów (cyberpunk UI)
│   ├── code-sensei.html
│   ├── gen-podsum-ai.html
│   ├── titanic.html
│   └── iris.html
├── docs/
│   ├── adr/                  # ADR (decyzje architektoniczne)
│   ├── images/               # Wspólne grafiki projektów
│   ├── projects/             # Analizy HTML + notebooki (np. Titanic, Iris)
│   └── command.md            # Ten plik
└── .github/workflows/deploy.yml
```

---

## Testowanie responsywności

Uruchom lokalnie (npm lub Python), DevTools (F12) → tryb responsywny (Ctrl+Shift+M).
