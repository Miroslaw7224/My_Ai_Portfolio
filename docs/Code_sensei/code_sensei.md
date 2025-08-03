# Code Sensei - AI do Analizy Kodu

Interaktywna aplikacja webowa do analizy kodu z użyciem AI.  
Projekt powstał w ramach nauki na kursie **Od Zera do AI**.

---

## Funkcje

### 1. Analiza kodu źródłowego
- Wklej dowolny fragment kodu w Pythonie lub innym języku.  
- Generuj **opis ogólny** (jedno zdanie streszczające działanie) lub **opis szczegółowy** (blokowy albo linia po linii).  
- Opisy dostępne w **języku polskim** lub **angielskim**.

### 2. Wyjaśnienia audio (TTS)
- Automatyczne generowanie nagrań audio z opisów kodu.  
- Wybór głosu (np. Alloy, Nova, Shimmer).  
- Odtwarzanie i pobieranie pliku MP3.

### 3. Tryb Q&A o kodzie
- Zadawanie pytań typu: „Co robi ta funkcja?” albo „Dlaczego użyto pętli for?”.  
- Model AI odpowiada wprost na pytanie, odnosząc się do wklejonego kodu.  
- Odpowiedzi są zapisywane w historii.

### 4. Refaktoryzacja kodu
- Automatyczne przekształcenie kodu na bardziej czytelny i zgodny z dobrymi praktykami.  
- Generowany jest też **komentarz** wyjaśniający wprowadzone zmiany.

### 5. Historia analiz i statystyki
- Przegląd wszystkich wygenerowanych opisów, odpowiedzi i refaktoryzacji.  
- Filtrowanie wyników po typie opisu, użytym głosie, kosztach.  
- Eksport danych do **pliku CSV**.  
- Podsumowanie kosztów tekstu i audio.

### 6. Obsługa kosztów
- Automatyczne przeliczanie tokenów OpenAI na koszt w PLN.  
- Wyświetlanie kosztu dla każdej operacji i sumarycznych statystyk.

---

## Jak korzystać z aplikacji

### Krok 1: Uruchom aplikację
- Przejdź do [demo na Streamlit Cloud](https://code-sense.streamlit.app/).  
- Poczekaj, aż aplikacja się załaduje (może to potrwać kilka sekund).

### Krok 2: Wprowadź klucz OpenAI
- W panelu bocznym (po lewej) znajdziesz pole **„Wprowadź swój klucz OpenAI”**.  
- Wklej swój klucz API w formacie `sk-...`.  
- Klucz **nie jest zapisywany** – używany jest tylko lokalnie w tej sesji.

### Krok 3: Wklej kod do analizy
- W głównym polu tekstowym wklej kod źródłowy.  
- Kliknij **„Wyświetl kod”**, aby zobaczyć podgląd.

### Krok 4: Generuj opisy kodu
- Wybierz język (polski/angielski) i typ opisu (ogólny lub szczegółowy).  
- Kliknij przycisk **„Generuj opis”** – pojawi się wyjaśnienie działania kodu.  
- Opcjonalnie: kliknij **„Generuj audio”**, aby odsłuchać opis.

### Krok 5: Zadawaj pytania o kod
- Przejdź do sekcji **„Zadaj pytanie o kod”**.  
- Wpisz pytanie np. *„Jak działa ta funkcja?”* i kliknij **„Odpowiedz na pytanie”**.

### Krok 6: Refaktoryzuj kod
- Kliknij **„Refaktoryzuj kod”**.  
- Zobaczysz poprawioną wersję kodu i komentarz wyjaśniający zmiany.

### Krok 7: Historia i statystyki
- W zakładce **„Historia analiz”** znajdziesz wszystkie swoje wcześniejsze opisy i nagrania.  
- Możesz je **odtworzyć, pobrać lub usunąć**.  
- W zakładce **„Statystyki i eksport”** zobaczysz sumaryczne koszty i możesz **pobrać dane CSV**.

##  Dostęp do aplikacji

<div style="display: flex; gap: 20px; margin: 30px 0; flex-wrap: wrap; justify-content: center;">

<a href="https://code-sense.streamlit.app/" class="md-button md-button--primary" target="_blank" style="flex: 1; min-width: 250px; text-align: center; padding: 15px; background: #007bff; color: white; text-decoration: none; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s ease;">
    🌐 **Uruchom Aplikację**
</a>

<a href="https://github.com/Miroslaw7224/Code_Sensei" class="md-button md-button--primary" target="_blank" style="flex: 1; min-width: 250px; text-align: center; padding: 15px; background: #28a745; color: white; text-decoration: none; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s ease;">
    📂 **Kod Źródłowy**
</a>

</div>

---
<style>
.zoomable-image {
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.zoomable-image:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    cursor: pointer;
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: #bbb;
}
</style>

<div align="center">
    <img src="../../images/Code_sensei_1.jpg" alt="Code Sensei 1" class="zoomable-image" width="500" onclick="openModal(this)">
</div>

<div align="center" style="margin-top: 20px;">
    <img src="../../images/Code_sensei_2.jpg" alt="Code Sensei 2" class="zoomable-image" width="500" onclick="openModal(this)">
</div>

<div id="imageModal" class="modal" onclick="closeModal()">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="modalImage">
</div>

<script>
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Zamykanie modala klawiszem ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
</script>