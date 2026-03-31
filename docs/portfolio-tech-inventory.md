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
3. Zsynchronizuj tagi na kartach `index.html` z nazwami kanonicznymi (skrót na karcie jest OK, byle spójny z aliasami).
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
| Next.js 14 | Next.js |
| React 19 | React |
| TypeScript (strict) | TypeScript |
| @ducanh2912/next-pwa | next-pwa |
| Jupyter Notebook | Jupyter Notebooks |
| Jupyter (tylko na karcie `index`) | Jupyter Notebooks |
| Python 3.11 | Python |
| SQLAlchemy 2.0 | SQLAlchemy 2.0 |
| PostgreSQL | PostgreSQL |
| Docker Compose | Docker Compose |
| GitHub Actions | GitHub Actions |
| coverage.py | coverage.py |
| pytest | pytest |
| MinIO | MinIO |
| Supabase Storage | Supabase Storage |
| Vite | Vite |
| Supabase Auth | Supabase Auth |
| PostgreSQL · RLS | PostgreSQL · RLS |
| shadcn/ui · Radix | shadcn/ui · Radix |
| Tailwind (karta `index`) | Tailwind CSS |
| Gemini API | Gemini API |

---

## Macierz: technologia → projekty (slug)

Slugi: `code-sensei`, `english-buddy`, `gen-podsum-ai`, `second-brain`, `titanic`, `iris`, `career-guide`.

| Nazwa kanoniczna | Projekty (slug) | Liczba |
|------------------|-----------------|--------|
| Python | code-sensei, titanic, iris, career-guide | 4 |
| React | english-buddy, gen-podsum-ai, second-brain, career-guide | 4 |
| OpenAI API | code-sensei, english-buddy, gen-podsum-ai | 3 |
| Pandas | code-sensei, titanic, iris | 3 |
| TypeScript | english-buddy, gen-podsum-ai, second-brain | 3 |
| ESLint · Prettier | english-buddy, second-brain | 2 |
| Git / GitHub | code-sensei, career-guide | 2 |
| Husky | english-buddy, second-brain | 2 |
| Jupyter Notebooks | titanic, iris | 2 |
| Lucide React | gen-podsum-ai, second-brain | 2 |
| Matplotlib | titanic, iris | 2 |
| Next.js | english-buddy, second-brain | 2 |
| NumPy | titanic, iris | 2 |
| Scikit-learn | titanic, iris | 2 |
| Seaborn | titanic, iris | 2 |
| Tailwind CSS | english-buddy, second-brain | 2 |
| Vitest · Playwright | english-buddy, second-brain | 2 |
| @openai/agents | english-buddy | 1 |
| coverage.py | career-guide | 1 |
| Docker Compose | career-guide | 1 |
| Express | gen-podsum-ai | 1 |
| FastAPI | career-guide | 1 |
| FFmpeg | gen-podsum-ai | 1 |
| Firebase Admin | second-brain | 1 |
| Firebase Auth | second-brain | 1 |
| Firestore | second-brain | 1 |
| Gemini API | second-brain | 1 |
| GitHub Actions | career-guide | 1 |
| Luxon · uuid | english-buddy | 1 |
| MinIO | career-guide | 1 |
| Multer | gen-podsum-ai | 1 |
| next-pwa | english-buddy | 1 |
| Node.js | gen-podsum-ai | 1 |
| Plotly | titanic | 1 |
| PostgreSQL | career-guide | 1 |
| PostgreSQL · RLS | english-buddy | 1 |
| pytest | career-guide | 1 |
| react-hook-form · Zod | english-buddy | 1 |
| REST API | gen-podsum-ai | 1 |
| Sentry | english-buddy | 1 |
| shadcn/ui · Radix | english-buddy | 1 |
| SQLAlchemy 2.0 | career-guide | 1 |
| SQLite | code-sensei | 1 |
| Storybook | english-buddy | 1 |
| Streamlit | code-sensei | 1 |
| Streamlit Cloud | code-sensei | 1 |
| Supabase Auth | english-buddy | 1 |
| Supabase Storage | career-guide | 1 |
| TanStack Query | english-buddy | 1 |
| TipTap | second-brain | 1 |
| TTS | code-sensei | 1 |
| Vite | career-guide | 1 |
| Zustand | english-buddy | 1 |

**Łącznie wierszy (kanonicznych technologii):** 54.

---

## Kolejność na `index.html` (`#skills`)

1. Grupy według kolumny **Liczba** (malejąco): np. **3 → 2 → 1** (aktualny maksimum to 3 projekty na technologię).
2. W grupie o tej samej liczbie: sortowanie **alfabetyczne** po nazwie kanonicznej (polski układ znaków; w praktyce nazwy są po angielsku — np. dla `[ 4 ]`: Python, React; dla `[ 3 ]`: OpenAI API, Pandas, TypeScript; dla `[ 2 ]`: ESLint · Prettier, Git / GitHub, Husky, Jupyter Notebooks, Lucide React, Matplotlib, Next.js, NumPy, Scikit-learn, Seaborn, Tailwind CSS, Vitest · Playwright).
