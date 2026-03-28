# ADR 0004: Jedna wersja prawdy dla ścieżek plików (`docs/images/`, `docs/projects/<slug>/`)

## Status

Zaakceptowane (2026-03-28)

## Kontekst

Strony w `projects/*.html` oraz `index.html` linkują do grafik i do dłuższych materiałów (analizy HTML, notebooki, Markdown). Bez wspólnej konwencji katalogów łatwo o:

- **duplikaty** tej samej grafiki w kilku miejscach (np. osobno `images/` w korzeniu i w `docs/`);
- **nierówne URL-e** zależnie od tego, skąd otwarto stronę, albo martwe linki po refaktorze folderów;
- **nieprzewidywalne ścieżki** dla kolejnych projektów i dla współtwórców.

ADR 0002 ustala role warstw (`projects/` vs `docs/`) oraz slug i domyślne `docs/images/`; niniejszy dokument **ściśle utrwala**, gdzie w repozytorium leży kanoniczna kopia zasobów treściowych projektów, żeby linki z HTML były stabilne przy deployu z katalogu głównego (ADR 0003).

Operacyjny skrót reguł: `docs/command.md` (sekcja konwencji plików).

## Decyzja

### Grafiki projektów (zrzuty ekranu, diagramy, materiały referencyjne używane z kart i z dokumentacji)

- **Jedna wersja prawdy:** `docs/images/` (ew. podkatalog, np. `docs/images/<slug>/`).
- Strony w `projects/*.html` odwołują się do tych plików ścieżkami względnymi od korzenia witryny (np. `docs/images/...`), zgodnie z hostowaniem GitHub Pages z roota repozytorium.
- **Nie** utrzymujemy osobnego katalogu `images/` w katalogu głównym repozytorium na potrzeby tych samych assetów — unikamy dublowania treści.

### Długa forma i artefakty projektu (analizy HTML, notebooki, powiązane pliki)

- **Jedna wersja prawdy:** `docs/projects/<slug>/`, gdzie `<slug>` jest spójny z `projects/<slug>.html` (jak w ADR 0002).
- Linki z `projects/<slug>.html` prowadzą do tych plików tylko wtedy, gdy faktycznie istnieją w repozytorium.

### Wyjątek względem „wszystko przez `docs/images/`”

Zgodnie z ADR 0002: **zasoby ściśle związane wyłącznie z layoutem** danej strony HTML (np. tło lub ikona używana tylko przez jeden plik w `projects/`) mogą pozostać przy ścieżkach względnych obok tej strony **o ile** deploy i ścieżki względne z korzenia witryny to obsługują. Nie są to zrzuty ani materiały „projektowe” w sensie współdzielonej dokumentacji — nie zastępują reguły centralizacji dla treści w `docs/images/` i `docs/projects/<slug>/`.

## Konsekwencje

### Pozytywne

- Przewidywalne ścieżki; łatwiejsze przeglądy zmian i refaktory bez szukania kopii plików.
- Spójne linki z HTML do zasobów pod adresem Pages (jeden model root repo — ADR 0003).
- Jasny podział: treść marketingowa/edukacyjna w `docs/`, a nie rozproszone duplikaty w kilku `images/`.

### Negatywne

- Dłuższe ścieżki w atrybutach `src`/`href` niż przy lokalnym `images/` obok HTML — świadoma cena jednego miejsca przechowywania.
- Nowy współtwórca musi przeczytać krótką regułę (command lub ten ADR), zanim doda pliki „obok” strony z przyzwyczajenia.

## Rozważane alternatywy

1. **Osobny `images/` w korzeniu obok `docs/images/`** — odrzucone: prowadzi do duplikatów albo niejasnego „która kopia jest aktualna”.
2. **Wyłącznie lokalne foldery `images/` przy każdym `projects/<slug>.html`** — odrzucone dla zrzutów i materiałów współdzielonych z `docs/`; utrudnia jednolite linkowanie z dokumentacji i powtarzalność między projektami.
3. **CDN lub zewnętrzny hosting assetów** — poza zakresem obecnego repo; wymagałoby osobnej decyzji i procesu publikacji.

## Powiązania

- ADR 0001 — statyczne HTML; brak buildu przenoszącego pliki.
- ADR 0002 — role `projects/` vs `docs/`, slug, wyjątek dla grafik layoutu.
- ADR 0003 — publikacja całego drzewa; linki muszą wskazywać zacommitowane ścieżki.
