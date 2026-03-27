# 🚢 Analiza Danych Pasażerów Titanica (1912)

<div align="center">
    <img src="../images/titanic.jpg" alt="Titanic" width="500" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</div>

---

## 📋 Opis Projektu

Projekt dotyczy **eksploracyjnej analizy danych** pasażerów statku Titanic z 1912 roku. Celem analizy jest ogólne zrozumienie struktury danych i poznanie podstawowych zależności między cechami pasażerów a ich przeżywalnością. Wyniki posłużą jako punkt wyjścia do dalszych prac, takich jak budowa modelu predykcyjnego.

---

## 🎯 Cele Analizy

| **Cel** | **Opis** | **Status** |
|:--------|:---------|:----------:|
| 📊 **Struktura danych** | Sprawdzenie kompletności i jakości danych pasażerów | ✅ |
| 🔍 **Zależności** | Odkrycie powiązań między wiekiem, płcią i klasą podróży a przeżywalnością | ✅ |
| 📈 **Wizualizacje** | Tworzenie wykresów i diagramów do zobrazowania danych | ✅ |
| 💡 **Wnioski końcowe** | Przygotowanie obserwacji do dalszego modelowania | ✅ |

---

## 📊 Zawartość Analizy

| **Komponent** | **Opis** | **Narzędzia** |
|:--------------|:---------|:-------------:|
| 🧹 **Przygotowanie danych** | Czyszczenie danych i analiza braków | Pandas, NumPy |
| 🔍 **Eksploracja zmiennych** | Rozkłady wieku, płci, klasy podróży | Matplotlib, Seaborn |
| 📊 **Analiza przeżywalności** | Czynniki wpływające na szanse przeżycia | Statystyka opisowa |
| 🎨 **Wizualizacje** | Histogramy, wykresy słupkowe, analiza korelacji | Plotly, Seaborn |

---

## 🛠️ Technologie Użyte

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">

<h3>🐍 Python + Pandas</h3>
<p><strong>Zastosowanie:</strong> Analiza i przygotowanie danych</p>
<ul>
<li>Czytanie i czyszczenie danych</li>
<li>Manipulacja DataFrame</li>
<li>Analiza statystyczna</li>
</ul>

</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">

<h3>📊 Matplotlib / Seaborn</h3>
<p><strong>Zastosowanie:</strong> Tworzenie wizualizacji</p>
<ul>
<li>Histogramy i wykresy słupkowe</li>
<li>Wykresy punktowe i pudełkowe</li>
<li>Macierze korelacji</li>
</ul>

</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">

<h3>📓 Jupyter Notebook</h3>
<p><strong>Zastosowanie:</strong> Interaktywna praca nad kodem</p>
<ul>
<li>Eksperymentowanie z kodem</li>
<li>Dokumentacja procesu</li>
<li>Prezentacja wyników</li>
</ul>

</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">

<h3>🌐 MkDocs</h3>
<p><strong>Zastosowanie:</strong> Prezentacja projektu w formie strony</p>
<ul>
<li>Dokumentacja techniczna</li>
<li>Prezentacja wyników</li>
<li>Hosting online</li>
</ul>

</div>

</div>

---

## 📝 Szczegółowe Podsumowanie

| **Obszar** | **Kluczowe Wnioski** | **Wartości** |
|:-----------|:---------------------|:-------------:|
| 📊 **Struktura danych** | Liczba pasażerów i cech | 891 pasażerów, 12 cech |
| ⚠️ **Brakujące dane** | Obszary wymagające uwagi | Braki w `Age` i `Cabin` |
| 🔗 **Korelacje** | Główne czynniki przeżycia | Płeć i klasa podróży |
| 👥 **Charakterystyka grup** | Grupy z wyższym wskaźnikiem przeżycia | Kobiety, dzieci, 1 klasa |

---

## 🚀 Szybki Start

<div style="display: flex; gap: 20px; margin: 30px 0; flex-wrap: wrap; justify-content: center;">

<a href="titanic.ipynb" class="md-button md-button--primary" style="flex: 1; min-width: 250px; text-align: center; padding: 15px; background: #007bff; color: white; text-decoration: none; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s ease;" download>
    📓 **Pobierz Notebook**
</a>

<a href="titanic.html" class="md-button md-button--primary" target="_blank" style="flex: 1; min-width: 250px; text-align: center; padding: 15px; background: #28a745; color: white; text-decoration: none; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s ease;">
    🌐 **Otwórz Analizę Online**
</a>

</div>

---

## 📈 Dostępne Wizualizacje

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 25px; margin: 30px 0;">

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">

<div style="background: white; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #e9ecef;">
    <h4 style="margin-bottom: 10px;">📊 Histogramy</h4>
    <p style="color: #666;">Rozkłady wszystkich cech numerycznych</p>
</div>

<div style="background: white; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #e9ecef;">
    <h4 style="margin-bottom: 10px;">📦 Wykresy Pudełkowe</h4>
    <p style="color: #666;">Analiza outlierów i rozkładów</p>
</div>

<div style="background: white; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #e9ecef;">
    <h4 style="margin-bottom: 10px;">🔗 Wykresy Punktowe</h4>
    <p style="color: #666;">Relacje między cechami</p>
</div>

<div style="background: white; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #e9ecef;">
    <h4 style="margin-bottom: 10px;">🎯 Macierz Korelacji</h4>
    <p style="color: #666;">Relacje między cechami</p>
</div>

</div>

</div>

---

## 🛠️ Praktyczne Zastosowania

| **Obszar** | **Opis** | **Przykłady** |
|:-----------|:---------|:-------------:|
| 🤖 **Uczenie maszynowe** | Dane i wnioski mogą posłużyć do stworzenia modelu przewidującego przeżycie pasażera | Klasyfikacja binarna, Random Forest, SVM |
| 📊 **Raportowanie** | Wizualizacje i statystyki można wykorzystać w prezentacjach i raportach | Dashboardy, prezentacje biznesowe |
| 📚 **Nauka EDA** | Idealny zestaw do nauki eksploracji danych i budowy wykresów | Tutoriale, kursy online |
| 🔍 **Porównania danych** | Możliwość zestawiania wyników z innymi zbiorami historycznymi | Analizy porównawcze, badania historyczne |

---

## 📞 Kontakt i Wsparcie

<div style="display: flex; gap: 20px; margin: 30px 0; flex-wrap: wrap; justify-content: center;">

<a href="mailto:miro7224.job@gmail.com" class="md-button md-button--primary" style="flex: 1; min-width: 250px; text-align: center; padding: 15px; background: #dc3545; color: white; text-decoration: none; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s ease;">
    📧 **Napisz Email**
</a>

</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; padding: 25px; border-radius: 10px; text-align: center; margin: 30px 0;">

### 💬 Masz pytania lub sugestie?
Zachęcamy do kontaktu i współpracy nad rozwojem tego projektu!

</div>






