# ADR 0001: Statyczne HTML/CSS/JS dla witryny portfolio (bez SPA, SSG i kroku build)

## Status

Zaakceptowane (2026-03-28)

## Kontekst

Repozytorium udostępnia publiczną warstwę portfolio jako zwykłe pliki w repozytorium:

- strona główna: `index.html` w katalogu głównym;
- podstrony projektów: `projects/*.html` (np. `code-sensei.html`, `english-buddy.html`);
- materiały robocze / wariant podglądu UI: `Development/portfolio_cyber_preview.html` (oraz inne pliki w `Development/`, jeśli się pojawią).

Styl i zachowanie opierają się na wbudowanych arkuszach CSS i skryptach JS w tych plikach (np. czcionki z Google Fonts), bez narzutu frameworka aplikacji ani generatora stron.

Wdrożenie na GitHub Pages odbywa się przez workflow `.github/workflows/deploy.yml`, który publikuje **cały katalog repozytorium** (`path: '.'`). Nie ma osobnego kroku `npm run build` dla warstwy HTML portfolio; `npm start` (por. `docs/command.md`) służy wyłącznie lokalnemu serwerowi statycznemu.

Celem dokumentu jest utrwalenie decyzji dla autora repozytorium i ewentualnych współtwórców: ta warstwa pozostaje celowo prosta pod kątem hostowania i iteracji.

## Decyzja

Utrzymujemy **ręcznie edytowane** (ew. generowane poza tym repozytorium) pliki HTML/CSS/JS dla opisanej wyżej warstwy prezentacji portfolio **bez** bundlera, **bez** frameworku SPA (np. React) i **bez** SSG (np. Astro, Eleventy) w zakresie tego projektu.

## Konsekwencje

### Pozytywne

- Brak pipeline’u build dla UI portfolio: deploy to push i GitHub Pages.
- Proste debugowanie w przeglądarce (źródło = to, co jest w repo).
- Witryna nie zależy od wersji Node ani od aktualizacji narzędzi front-end do działania na produkcji.

### Negatywne

- Powtarzalność fragmentów UI między plikami HTML.
- Brak typowego ekosystemu komponentów i współdzielonych modułów jak w aplikacji SPA.
- Większy koszt spójnego refaktoru przy znacznym wzroście liczby podstron.

## Rozważane alternatywy

1. **React + Vite (lub inny bundler)** — odrzucone dla tej warstwy: narzut buildu, złożoność i narzędzia nie są uzasadnione przy statycznej treści portfolio w obecnym zakresie.
2. **SSG (Astro, 11ty itd.)** — odrzucone na teraz: wymaga procesu generowania i utrzymania szablonów; przy obecnym rozmiarzie witryny korzyść jest mniejsza niż prostota „pliki w repo”.
3. **Sam Vite tylko do assetów** — nie stosujemy; przy obecnym rozmiarze nie jest to potrzebne. W razie zmiany skali można rozważyć osobny ADR.

## Powiązania

- [ADR 0002](0002-warstwa-prezentacji-docs-i-nowe-projekty.md) — podział warstwy prezentacji (`index.html`, `projects/`) vs materiały w `docs/` oraz zasady dodawania projektów.
- [ADR 0003](0003-github-pages-calosc-repo-jako-artifact.md) — wdrożenie GitHub Pages z artefaktu obejmującego całe repozytorium (`path: '.'`).
- [ADR 0005](0005-lokalny-podglad-npm-start-serve.md) — szczegóły lokalnego podglądu (`npm start`, `serve` na `127.0.0.1:8000`); skrót poleceń pozostaje w `docs/command.md`.
