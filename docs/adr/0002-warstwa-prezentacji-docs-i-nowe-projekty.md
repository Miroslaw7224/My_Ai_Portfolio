# ADR 0002: Warstwa prezentacji (`index.html`, `projects/`) vs `docs/` oraz dodawanie projektów

## Status

Zaakceptowane (2026-03-28)

## Kontekst

Obok warstwy portfolio opisanej w ADR 0001 repozytorium zawiera katalog `docs/`: m.in. ADR, notatki (`docs/command.md`), obrazy referencyjne (`docs/images/`) oraz ewentualne dłuższe opisy projektów. Dwie warstwy treści pełnią różne role; bez utrwalonej reguły łatwo o niespójne linki, dublowanie faktów lub pominięcie kroku przy nowym projekcie.

Katalog `docs/` utrzymujemy jako **zwykłe pliki w repozytorium** (głównie Markdown, obrazy i powiązane zasoby). Nie ma z niego osobnego kroku budowy ani osobnej wygenerowanej witryny — publiczną „witryną” portfolio pozostaje warstwa HTML z ADR 0001. Zmiana tego modelu (np. wprowadzenie generatora dokumentacji) wymagałaby **nowego ADR**.

## Decyzja

### Role kanałów

1. **Prezentacja** — `index.html` oraz `projects/<slug>.html`: zwięzły pitch, kluczowe technologie lub tagi, linki zewnętrzne (repozytorium, demo), reprezentatywne grafiki. Celem jest szybki odbiór i nawigacja dalej (kod, demo, ewentualnie materiały w `docs/`).

2. **Materiały w `docs/`** — długa forma: uzasadnienia, architektura, kompromisy, instrukcje odtworzenia, materiały analityczne, ADR. **Osobny opis projektu w `docs/` jest opcjonalny**; jeśli go nie ma, strona w `projects/` nie obiecuje dokumentu głębokiego.

### Linkowanie

- Z `projects/<slug>.html` link do materiału w `docs/` **tylko wtedy**, gdy ten materiał istnieje w repozytorium.
- Z `docs/` link zwrotny do `projects/<slug>.html` oraz, w razie potrzeby, do zewnętrznego demo lub repozytorium.

### Źródło prawdy dla faktów twardych

Adresy URL (repozytorium, demo), główny stack i inne fakty, które muszą być spójne z wizytówką, utrzymujemy **priorytetowo** w `projects/<slug>.html`. W `docs/` powtarzamy je tylko tam, gdzie kontekst narracji tego wymaga; przy rozbieżnościach aktualizacja zaczyna się od strony projektu w `projects/`.

### Konwencje

- **Slug**: nazwa pliku `projects/<slug>.html` powinna odpowiadać nazwie folderu lub pliku opisu w `docs/` (np. `docs/projects/<slug>/`), jeśli taki powstanie — ten sam `<slug>` w obu miejscach.
- **Obrazy** używane w dokumentacji i jako referencje: domyślnie `docs/images/` (lub podfolder); grafiki ściśle związane z layoutem strony HTML mogą pozostać przy ścieżkach względnych używanych przez daną podstronę, o ile deploy (GitHub Pages, root repo) to obsługuje.

### Checklist: nowy projekt

1. Dodać kartę / wpis prowadzący do projektu na `index.html`.
2. Utworzyć `projects/<slug>.html` (spójny z resztą cyber UI i ADR 0001).
3. Opcjonalnie: dłuższy opis w `docs/` (np. `docs/projects/<slug>/` lub jeden plik `.md`) oraz powiązane obrazy w `docs/images/` lub podkatalogu.
4. Ustawić linki: wewnętrzne (`index` ↔ `projects/<slug>.html`) oraz z `projects/` do `docs/` tylko jeśli punkt 3 zrealizowano.
5. Sprawdzić ścieżki względne pod publikację z katalogu głównego repozytorium (np. GitHub Pages).

## Konsekwencje

### Pozytywne

- Jasny podział: skan dla odwiedzającego vs głębia dla autora i czytelnika technicznego.
- Powtarzalna lista kroków ogranicza pominięcia przy kolejnych projektach.
- Możliwość rozbudowy `docs/` bez zamiany całego portfolio w długi tekst i bez osobnego pipeline’u dokumentacji.

### Negatywne

- Ryzyko rozjechania się treści między kanałami — łagodzone regułą źródła prawdy i linków bez „martwych” obietnic.
- Przy dużej liczbie projektów warto rozważyć wspólne fragmenty UI (osobny temat, poza zakresem tego ADR).
- Pliki `.md` w `docs/` nie są automatycznie złożone w osobną nawigowalną witrynę z wyszukiwarką — to świadoma cena prostoty modelu „pliki w repo”.

## Rozważane alternatywy

1. **Osobny generator dokumentacji jako główna warstwa publiczna nad `docs/`** — odrzucone: portfolio wizytówkowe opiera się na HTML (ADR 0001); osobny build dokumentacji nie zastępuje strony projektowej w stylu witryny i nie jest częścią obecnego repozytorium.
2. **Wymóg długiego opisu w `docs/` dla każdego projektu** — odrzucone: nie każdy projekt wymaga dokumentacji głębokiej; obowiązek zwiększałby koszt utrzymania bez proporcjonalnej korzyści.
3. **Źródło prawdy wyłącznie w `docs/`** — odrzucone: odwiedzający najpierw trafia na `projects/`; fakty muszą być czytelne bez otwierania Markdownu.

## Powiązania

- [ADR 0001](0001-statyczne-html-portfolio-bez-buildu.md) — statyczne HTML/CSS/JS dla witryny portfolio bez SPA, SSG i kroku build.
- [ADR 0004](0004-jedna-wersja-prawdy-sciezki-plikow.md) — utrwalenie kanonicznych ścieżek (`docs/images/`, `docs/projects/<slug>/`) i jednego miejsca na assety treściowe.
