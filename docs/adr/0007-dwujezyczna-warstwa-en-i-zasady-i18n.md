# ADR 0007: Dwujęzyczna warstwa `en/` i zasady i18n dla portfolio statycznego

## Status

Zaakceptowane (2026-03-31)

## Kontekst

Repozytorium zawiera już dwa zestawy statycznych stron portfolio:

- warstwa podstawowa (PL): `index.html` oraz `projects/<slug>.html`;
- warstwa angielska (EN): `en/index.html` oraz `en/projects/<slug>.html`.

Model ten działa w ramach architektury z ADR 0001 (statyczne HTML bez bundlera/SSG). Brak formalnej decyzji o i18n utrudnia utrzymanie spójności między wersjami językowymi i zwiększa ryzyko:

- rozjazdu treści lub linków między PL i EN;
- niejednoznacznego źródła prawdy dla faktów twardych (repo/demo/stack);
- pomijania aktualizacji EN przy zmianach na stronach PL (i odwrotnie).

## Decyzja

Utrzymujemy dwujęzyczność jako **dwa równoległe drzewa statycznych stron HTML**:

- PL: `index.html`, `projects/<slug>.html`;
- EN: `en/index.html`, `en/projects/<slug>.html`.

Nie wprowadzamy runtime i18n, generatora tłumaczeń ani procesu buildu; decyzja pozostaje zgodna z ADR 0001.

## Zasady spójności

1. **Slug i mapa stron**  
   Każda strona projektu w PL ma odpowiednik EN z tym samym `<slug>`:
   - `projects/<slug>.html` ↔ `en/projects/<slug>.html`.

2. **Źródło prawdy dla faktów twardych**  
   Priorytetowym źródłem prawdy pozostaje strona projektu w PL (`projects/<slug>.html`) zgodnie z ADR 0002.  
   Wersja EN powinna odzwierciedlać te same fakty: URL repo, URL demo, główny stack, kluczowe liczby.

3. **Linkowanie między językami**  
   Jeżeli na stronie istnieje przełącznik języka, wskazuje odpowiadającą stronę z tym samym `<slug>` w drugim drzewie.

4. **Zakres tłumaczenia**  
   Tłumaczymy treść opisową, ale nie zmieniamy tożsamości technologii, nazw własnych, URL-i ani slugów.

## Procedura zmiany

Przy nowym projekcie lub istotnej zmianie istniejącego:

1. Zaktualizować/utworzyć stronę PL: `projects/<slug>.html` (oraz wpis na `index.html`).
2. Zaktualizować/utworzyć odpowiednik EN: `en/projects/<slug>.html` (oraz wpis na `en/index.html`).
3. Sprawdzić przełącznik języka i linki wewnętrzne w obu wersjach.
4. Sprawdzić spójność faktów twardych (repo/demo/stack) między PL i EN.

## Konsekwencje

### Pozytywne

- Czytelny, prosty model i18n zgodny z architekturą „bez buildu”.
- Przewidywalne URL-e i łatwe mapowanie stron PL ↔ EN.
- Brak dodatkowych narzędzi i zależności.

### Negatywne

- Ręczna synchronizacja dwóch drzew HTML zwiększa koszt utrzymania.
- Wyższe ryzyko rozjazdu treści bez dyscypliny edycyjnej.

## Rozważane alternatywy

1. **Runtime i18n (jeden HTML + słowniki JS)** — odrzucone: zwiększa złożoność i logikę front-end bez potrzeby dla obecnej skali.
2. **SSG/templating dla języków** — odrzucone na teraz: wymaga zmiany modelu z ADR 0001 i osobnego ADR.
3. **Tylko wersja EN bez PL** — odrzucone: obecna warstwa portfolio utrzymywana jest jako dwujęzyczna.

## Powiązania

- [ADR 0001](0001-statyczne-html-portfolio-bez-buildu.md) — statyczny model HTML bez builda.
- [ADR 0002](0002-warstwa-prezentacji-docs-i-nowe-projekty.md) — źródło prawdy dla faktów na stronach projektów i checklista dodawania projektów.
- [ADR 0006](0006-inwentarz-stacku-i-sekcja-skills.md) — reguły utrzymania stacku i spójności metadanych technologii.
