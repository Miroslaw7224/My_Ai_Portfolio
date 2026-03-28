# ADR 0003: GitHub Pages z całego katalogu repozytorium (`path: '.'`) zamiast osobnego katalogu wyjściowego (np. `site/`) lub gałęzi `gh-pages`

## Status

Zaakceptowane (2026-03-28)

## Kontekst

Workflow `.github/workflows/deploy.yml` po `checkout` pakuje do artefaktu GitHub Pages **całą zawartość katalogu roboczego** (`path: '.'` w `actions/upload-pages-artifact`), a następnie `actions/deploy-pages` publikuje ją jako root witryny.

Warstwa wizytówkowa portfolio jest opisana w ADR 0001 (`index.html`, `projects/*.html`); podział treści względem `docs/` — w ADR 0002. W repozytorium nie ma kroku budowy dokumentacji ani innego generatora, którego jedynym wyjściem byłby katalog `site/` publikowany zamiast reszty repo.

Typowe alternatywy to: (A) publikacja wyłącznie wygenerowanego katalogu wyjściowego (np. `site/` z generatora dokumentacji), (B) osobna gałąź `gh-pages` z jednym „płaskim” drzewem plików pod hosting. Model `docs/` bez osobnego buildu — ADR 0002.

## Decyzja

Utrzymujemy wdrożenie GitHub Pages jako **snapshot całego commitowanego drzewa** z gałęzi źródłowej `main`, bez osobnego katalogu wyjściowego typu `site/` jako jedynego artefaktu i bez wymogu drugiej gałęzi wyłącznie pod hosting.

## Uzasadnienie

### Dlaczego nie tylko wygenerowany katalog typu `site/`

- „Produkcją” pod publicznym adresem Pages nie jest output żadnego generatora dokumentacji, lecz **ręcznie utrzymywane** strony HTML w korzeniu i w `projects/` (ADR 0001). Katalog `docs/` to pliki źródłowe w repo, nie osobny artefakt buildu (ADR 0002).
- Artefakt wyłącznie `site/` **pominąłby** `index.html` i `projects/*.html` albo wymagałby przeniesienia całej warstwy portfolio do modelu opartego na generatorze — zmiana architektury, sprzeczna z obecnymi ADR 0001 i 0002.
- Brak kroku budowy dokumentacji w pipeline oznacza brak pojedynczego, kanonicznego `site/`; spójnym artefaktem pozostaje **to, co jest w repozytorium**, włącznie z HTML i opcjonalnym `docs/`.

### Dlaczego nie osobna gałąź `gh-pages` z jednym katalogiem

- Model GitHub Pages oparty o Actions (`upload-pages-artifact` + `deploy-pages`) **nie wymaga** gałęzi `gh-pages`; publikacja z artefaktu ogranicza podwójne utrzymanie gałęzi i ryzyko rozjazdu względem `main`.
- Gałąź `gh-pages` z jednym katalogiem nadal wymagałaby CI kopiującego lub budującego zawartość — dodatkowy krok synchronizacji. Obecnie **źródłem prawdy dla tego, co widać na Pages, jest zawartość gałęzi źródłowej** po pushu.

## Konsekwencje

### Co faktycznie jest „produkcją”

- Serwowane są wszystkie ścieżki odpowiadające **zacommitowanym** plikom w drzewie checkout (pliki z `.gitignore` nie trafiają do artefaktu, bo nie ma ich w repozytorium).
- **Intencja główna dla odwiedzającego**: warstwa HTML z ADR 0001. Pozostałe katalogi (`docs/` z Markdownem, ewentualnie `Development/` itd.) są publicznie dostępne pod bezpośrednimi URL-ami, jeśli ktoś je otworzy lub zlinkuje — należy to mieć na uwadze przy commitach i linkach.

### Co musi być w repo

- Dla działania nawigacji portfolio: `index.html`, `projects/` oraz zasoby w ścieżkach względnych używanych z korzenia witryny.
- Jeśli strony HTML linkują do `docs/` lub `docs/images/`, odpowiadające pliki muszą być w commicie, żeby linki nie były martwe.
- **Poufne dane** nie powinny trafiać do repozytorium — deploy z `'.'` nie filtruje treści; pierwsza linia obrony to `.gitignore` i świadomy commit.

### Pozytywne

- Jedno źródło prawdy; brak synchronizacji `main` ↔ wygenerowany `site/` ↔ osobna gałąź publikacyjna.
- Proste ścieżki względne z korzenia repozytorium zgodne z hostowaniem „user/organization site” z roota gałęzi.

### Negatywne

- Większy artefakt niż „tylko minimalny front”; cała commitowana struktura jest publiczna (np. podglądy w `Development/` — jeśli są w repo, są potencjalnie widoczne w sieci).
- Zmiana na węższy artefakt lub osobny model publikacji wymaga nowego ADR lub rewizji tego dokumentu oraz zmiany workflow.

## Rozważane alternatywy

1. **Artefakt tylko `site/` (z generatora dokumentacji)** — odrzucone jako jedyne wdrożenie: nie pokrywa warstwy HTML portfolio (ADR 0001); w pipeline nie ma kroku generującego `site/` (model `docs/` — ADR 0002).
2. **Generator dokumentacji w CI + łączenie wyjścia z kopią `projects/`** — możliwe tylko po świadomej zmianie ADR 0002/0003; zwiększa złożoność pipeline’u; na teraz nie jest potrzebne.
3. **Gałąź `gh-pages` zamiast artefaktu z Actions** — odrzucone: zbędne przy hostingu Pages z GitHub Actions; utrudnia utrzymanie bez korzyści dla tego repozytorium.

## Powiązania

- ADR 0001 — statyczne HTML i brak buildu dla warstwy portfolio; wzmianka o `deploy.yml` i `path: '.'`.
- ADR 0002 — rola `docs/` vs `projects/`; `docs/` jako pliki źródłowe bez osobnego buildu.
