# Inwentarz stacku portfolio — źródło prawdy

Ten plik jest **jedynym źródłem prawdy** dla kanonicznych nazw technologii, przypisania do projektów oraz liczb **[ n ]** w sekcji `#skills` na `index.html`. Uzasadnienie architektoniczne: **ADR 0006** (`docs/adr/0006-inwentarz-stacku-i-sekcja-skills.md`).

## Zasady

1. **Normalizacja** — tagi na stronach projektów mogą mieć warianty (np. wersje w nawiasach); w inwentarzu i na stronie głównej używamy **nazwy kanonicznej** z tabeli aliasów.
2. **Liczy się tylko stack** — technologia wchodzi do macierzy i do licznika **wyłącznie**, jeśli występuje jako tag w sekcji **Stack** na `projects/<slug>.html`. Wzmianki w opisach / akapitach **nie** zwiększają licznika.
3. **Weryfikacja** — szczegóły użycia sprawdzasz na podstronie projektu; na stronie głównej **nie** podajemy listy projektów przy każdej technologii.
4. **Nisza [ 1 ]** — pojedynczy projekt z „głębokim” narzędziem (np. FFmpeg) jest OK; **[ 1 ]** oznacza niszę w portfolio, nie brak znajomości.

## Procedura przy nowym projekcie lub zmianie stacku

1. Zaktualizuj tagi w sekcji Stack w `projects/<slug>.html`.
2. Zaktualizuj **ten plik** (aliasy, wiersze macierzy, kolumnę „Projekty”).
3. Zsynchronizuj karty na `index.html` z nazwami kanonicznymi (skrót na karcie jest OK, byle spójny z aliasami).
4. Przepisz blok `#skills` w `index.html`: kolejność **malejąco po liczbie projektów**, przy **remisie** — alfabetycznie po nazwie kanonicznej (A–Z, znaki specjalne typu `@` na końcu lub przed literami — tutaj: `@` traktujemy jak literę „a” w sortowaniu pakietów npm).

---

## Alias → nazwa kanoniczna

| Tag / wariant na stronie projektu | Nazwa kanoniczna (UI + `#skills`) |
|-----------------------------------|-------------------------------------|
| Python 3.x | Python |
| OpenAI API (GPT-4o) | OpenAI API |
| OpenAI API (Whisper + GPT) | OpenAI API |
| Text-to-Speech (TTS) | TTS |
| TanStack Query v5 | TanStack Query |
| Next.js 15 | Next.js |
| React 19 | React |
| TypeScript (strict) | TypeScript |
| @ducanh2912/next-pwa | next-pwa |
| Jupyter Notebook | Jupyter Notebooks |
| Jupyter (tylko na karcie `index`) | Jupyter Notebooks |
| Supabase Auth | Supabase Auth |
| PostgreSQL · RLS | PostgreSQL · RLS |
| shadcn/ui · Radix | shadcn/ui · Radix |
| Tailwind (karta `index`) | Tailwind CSS |

---

## Macierz: technologia → projekty (slug)

Slugi: `code-sensei`, `english-buddy`, `gen-podsum-ai`, `titanic`, `iris`.

| Nazwa kanoniczna | Projekty (slug) | Liczba |
|------------------|-----------------|--------|
| OpenAI API | code-sensei, english-buddy, gen-podsum-ai | 3 |
| Pandas | code-sensei, titanic, iris | 3 |
| Python | code-sensei, titanic, iris | 3 |
| Jupyter Notebooks | titanic, iris | 2 |
| Matplotlib | titanic, iris | 2 |
| NumPy | titanic, iris | 2 |
| React | english-buddy, gen-podsum-ai | 2 |
| Scikit-learn | titanic, iris | 2 |
| Seaborn | titanic, iris | 2 |
| TypeScript | english-buddy, gen-podsum-ai | 2 |
| @openai/agents | english-buddy | 1 |
| ESLint · Prettier | english-buddy | 1 |
| Express | gen-podsum-ai | 1 |
| FFmpeg | gen-podsum-ai | 1 |
| Git / GitHub | code-sensei | 1 |
| Husky | english-buddy | 1 |
| Lucide React | gen-podsum-ai | 1 |
| Luxon · uuid | english-buddy | 1 |
| Multer | gen-podsum-ai | 1 |
| Next.js | english-buddy | 1 |
| next-pwa | english-buddy | 1 |
| Node.js | gen-podsum-ai | 1 |
| Plotly | titanic | 1 |
| PostgreSQL · RLS | english-buddy | 1 |
| react-hook-form · Zod | english-buddy | 1 |
| REST API | gen-podsum-ai | 1 |
| Sentry | english-buddy | 1 |
| shadcn/ui · Radix | english-buddy | 1 |
| SQLite | code-sensei | 1 |
| Storybook | english-buddy | 1 |
| Streamlit | code-sensei | 1 |
| Streamlit Cloud | code-sensei | 1 |
| Supabase Auth | english-buddy | 1 |
| Tailwind CSS | english-buddy | 1 |
| TanStack Query | english-buddy | 1 |
| TTS | code-sensei | 1 |
| Vitest · Playwright | english-buddy | 1 |
| Zustand | english-buddy | 1 |

**Łącznie wierszy (kanonicznych technologii):** 38.

---

## Kolejność na `index.html` (`#skills`)

1. Grupy według kolumny **Liczba** (malejąco): 5 → 3 → 2 → 1.  
2. W grupie o tej samej liczbie: sortowanie **alfabetyczne** po nazwie kanonicznej (polski układ znaków; w praktyce nazwy są po angielsku — np. dla `[ 3 ]`: OpenAI API, Pandas, Python; dla `[ 2 ]`: Jupyter Notebooks, Matplotlib, NumPy, React, Scikit-learn, Seaborn, TypeScript).
