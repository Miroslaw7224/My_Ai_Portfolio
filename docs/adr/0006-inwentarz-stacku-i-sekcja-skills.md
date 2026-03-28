# ADR 0006: Inwentarz stacku i sekcja `#skills` na stronie głównej

## Status

Zaakceptowane (2026-03-28)

## Kontekst

Sekcja **Stack technologiczny** (`#skills`) na `index.html` prezentuje wiele technologii z projektów portfolio. Bez wspólnych reguł łatwo o:

- **rozjazd nazw** tej samej technologii (`OpenAI` vs `OpenAI API`, `Tailwind` vs `Tailwind CSS`) i błędne liczniki;
- **liczenie z opisów** zamiast z faktycznego stacku — inflacja „znajomości” bez pokrycia w tagach na `projects/<slug>.html`;
- **myślenie o paskach** jako o skali umiejętności przy jednoczesnych liczbach projektów — sprzeczny komunikat dla czytelnika;
- **zbyt długi scroll** przy dużej liczbie pozycji — sekcja dominuje nad projektami.

Jednocześnie utrzymujemy **statyczne HTML bez buildu** (ADR 0001): inwentarz musi być edytowalny ręcznie, bez generatora z tego pliku w pipeline.

Operacyjny skrót procedury: `.cursor/rules/main.mdc` (sekcja *Inwentarz stacku i sekcja `#skills`*); szczegóły i macierz: `docs/portfolio-tech-inventory.md`.

## Decyzja

### Źródło prawdy

- **Kanoniczne nazwy**, **przypisanie do projektów** oraz **liczby `[ n ]`** w `#skills` wynikają z pliku **`docs/portfolio-tech-inventory.md`** (tabele aliasów + macierz technologia → slugi).
- **Faktyczny stack projektu** nadal jest utrwalany w sekcji Stack na **`projects/<slug>.html`**; przy rozbieżności najpierw korygujemy stronę projektu i inwentarz, potem `index.html`.

### Zasady liczenia i prezentacji

1. **Normalizacja nazw** — w UI i inwentarzu używamy nazw kanonicznych; warianty z tagów na podstronach mapujemy według tabeli aliasów w `portfolio-tech-inventory.md`.
2. **Liczy się wyłącznie użycie w stacku** — technologia wchodzi do macierzy i do `[ n ]` tylko jako tag w sekcji Stack na `projects/<slug>.html`, nie na podstawie samych zdań w treści.
3. **Strona główna bez listy projektów przy każdej technologii** — czytelnik weryfikuje kontekst na podstronie projektu; bez linków nazw projektów przy pozycjach `#skills`.
4. **Paski pod nazwą** — jednakowa wizualna „pełna” długość (brak sugerowanego poziomu % umiejętności); **jedyny licznik frekwencji** to **`[ n ]`** (liczba projektów w portfolio z tą technologią w stacku).
5. **Wartość `[ 1 ]`** — świadomie akceptowana dla niszowych narzędzi (np. FFmpeg w jednym projekcie); nie jest traktowana jako „słabość”.
6. **Kolejność w `#skills`** — malejąco po liczbie projektów; przy tej samej liczbie — alfabetycznie po nazwie kanonicznej (szczegół w `portfolio-tech-inventory.md`).

### UI: zwijanie sekcji

- Domyślnie widoczne są ok. **cztery wiersze** siatki (`kolumny × 4` pozycji, wyliczane z layoutu w przeglądarce); reszta po **rozwiń / zwiń** (JavaScript na `index.html`).
- Przy braku nadmiaru pozycji przycisk się nie pokazuje. **Bez JavaScriptu** wszystkie pozycje pozostają widoczne (degradacja przyjazna).

### Procedura przy nowym projekcie lub zmianie stacku

1. Zaktualizować sekcję Stack na `projects/<slug>.html`.
2. Zaktualizować `docs/portfolio-tech-inventory.md`.
3. Zsynchronizować tagi na kartach `index.html` oraz blok `#skills` według inwentarza.

(Checklist spójny z ADR 0002 — rozszerzony o krok inwentarza w regułach Cursor.)

## Konsekwencje

### Pozytywne

- Przejrzysty, audytowalny model: licznik = policzalne tagi w stacku, nie narracja.
- Jedna tabela do aktualizacji przy zmianach; mniej przypadkowych rozjazdów między kartami a sekcją `#skills`.
- Krótszy pierwszy ekran stacku dzięki zwijaniu; pełna lista nadal dostępna jednym kliknięciem.

### Negatywne

- **Ręczna synchronizacja** trzech miejsc (podstrona projektu, inwentarz, `index.html`) — wymaga dyscypliny; błąd w jednym miejscu psuje spójność do następnej korekty.
- **Brak generowania** `#skills` z Markdowna w repo (świadomie, zgodnie z ADR 0001) — przy bardzo dużej liczbie technologii lista w HTML staje się długa w źródle.

## Rozważane alternatywy

1. **Generowanie `#skills` ze skryptu Node przy commicie** — odrzucone w tym modelu: wymagałoby nowego ADR i naruszałoby zasadę „brak buildu UI” z ADR 0001 (chyba że w przyszłości wyraźnie zdecydujemy inaczej).
2. **Tylko pełna lista bez zwijania** — odrzucone jako domyślne UX z powodu długości sekcji przy ~40 pozycjach; pozostaje dostępna po rozwinięciu.
3. **Paski jako skala umiejętności obok `[ n ]`** — odrzucone: miesza dwa różne znaczenia i myli czytelnika; zastąpione pełnymi paskami dekoracyjnymi + wyłącznie `[ n ]` jako metryka.

## Powiązania

- ADR 0001 — statyczne HTML; brak bundlera/buildu dla warstwy portfolio.
- ADR 0002 — `projects/<slug>.html` jako źródło faktów o projekcie; checklist nowego projektu.
- ADR 0004 — jedna wersja prawdy dla ścieżek; analogiczny duch dla **metadanych stacku** w inwentarzu.
- `docs/portfolio-tech-inventory.md` — dokument operacyjny (macierz, aliasy, kolejność).
- `.cursor/rules/main.mdc` — reguły dla agentów i autorów zmian w repozytorium.
