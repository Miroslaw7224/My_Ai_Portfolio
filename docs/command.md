# Komendy do uruchomienia Portfolio

## Lokalne uruchomienie (Development)

### Opcja 1: Python HTTP Server
```bash
# Z głównego katalogu projektu
python -m http.server 8000
```
Następnie otwórz przeglądarkę: `http://localhost:8000`

### Opcja 2: Python HTTP Server (Python 2.x)
```bash
python -m SimpleHTTPServer 8000
```

### Opcja 3: Live Server (VS Code Extension)
1. Zainstaluj rozszerzenie "Live Server" w VS Code
2. Kliknij prawym przyciskiem na `index.html`
3. Wybierz "Open with Live Server"

### Opcja 4: npx serve (Node.js)
```bash
npx serve
```

## Deployment na GitHub Pages

Portfolio automatycznie deployuje się na GitHub Pages przy każdym push do brancha `main`.

### Workflow GitHub Actions
Plik `.github/workflows/deploy.yml` automatycznie:
1. Buduje stronę
2. Deployuje na GitHub Pages
3. Strona dostępna pod: `https://<username>.github.io/Portfolio/`

### Ręczny deployment
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Struktura projektu

```
Portfolio/
├── index.html              # Strona główna
├── projects/               # Dedykowane strony projektów
│   ├── code-sensei.html
│   ├── titanic.html
│   └── iris.html
├── images/                 # Zdjęcia projektów
└── .github/workflows/
    └── deploy.yml         # GitHub Actions workflow
```

## Testowanie responsywności

```bash
# Uruchom lokalnie i testuj na różnych urządzeniach
python -m http.server 8000

# W przeglądarce użyj DevTools (F12)
# Responsive Design Mode: Ctrl+Shift+M (Windows) lub Cmd+Option+M (Mac)
```
