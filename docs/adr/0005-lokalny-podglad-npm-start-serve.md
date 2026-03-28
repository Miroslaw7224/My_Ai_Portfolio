# ADR 0005: Lokalny podgląd przez `npm start` (`serve` na `127.0.0.1:8000`)

## Status

Zaakceptowane (2026-03-28)

## Kontekst

Portfolio to statyczne HTML/CSS/JS (ADR 0001) z linkami i zasobami pod **ścieżkami względnymi** (w tym do `docs/` — ADR 0004). Otwieranie plików bezpośrednio z dysku (`file://`) często psuje rozwiązywanie ścieżek, moduły ES i zachowanie podobne do produkcji. Przeglądarki mogą też blokować żądania uznawane za cross-origin przy niektórych wzorcach ładowania zasobów lokalnych.

## Decyzja

**Zalecany** sposób podglądu lokalnego: z katalogu głównego repozytorium uruchomić `npm start`, co wywołuje `npx serve .` nasłuchujące na **`http://127.0.0.1:8000`** (patrz `package.json`). To samo można uzyskać jednorazowo przez `npx serve . -l tcp://127.0.0.1:8000` bez skryptu.

**Dopuszczalne alternatywy** (gdy Node/npm nie są pod ręką): `python -m http.server 8000`, Live Server w edytorze — nadal przez **HTTP**, nie przez `file://`.

**Nie zalecamy** polegania na samym otwarciu `index.html` z eksploratora jako podstawowego trybu pracy nad portfolio — tylko jako szybki podgląd pojedynczego pliku, jeśli ścieżki na to pozwalają.

Instrukcja poleceń: `docs/command.md`.

## Konsekwencje

- Jednolity adres i narzędzie ułatwiają opisy w dokumentacji i odtwarzalność „u mnie działa”.
- Nadal można użyć innego portu lub serwera; ADR nie blokuje, tylko wskazuje **domyślny** sposób ograniczający problemy `file://` / CORS przy zasobach względnych.

## Powiązania

- ADR 0001 — statyczne pliki; brak buildu; podgląd = serwer statyczny.
- ADR 0004 — ścieżki względne do `docs/`; sensowny podgląd wymaga hosta HTTP.
