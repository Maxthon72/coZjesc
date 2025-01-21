# Co Zjeść - Aplikacja do Wyszukiwania Przepisów

"Co Zjeść" to aplikacja webowa, która umożliwia użytkownikom wyszukiwanie przepisów kulinarnych na podstawie dostępnych składników oraz wartości odżywczych. Aplikacja pozwala również na przeglądanie szerokiej bazy przepisów, tworzenie list zakupów oraz personalizację przepisów.

## Technologie

- **Backend**: Django + Django REST Framework
- **Frontend**: Vue.js
- **Baza danych**: PostgreSQL
- **API do przepisów**: Spoonacular API
- **Hosting**: Azure (Azure App Service, Azure Static Web Apps, Azure Database for PostgreSQL)

## Funkcje

- **Wyszukiwanie przepisów** na podstawie składników, wartości odżywczych i kategorii dietetycznych.
- **Tworzenie list zakupów** na podstawie wybranych przepisów.
- **Dodawanie przepisów do ulubionych** i tworzenie kolekcji przepisów.
- **Personalizacja profilu** użytkownika z możliwością dodania preferencji dietetycznych.
- **Obsługa ciemnego trybu** dla lepszego komfortu użytkowania.

## Technologie

- Backend
   - Django
   - PostgreSQL
   - Klucz Spoonacular API
- Frontend
   - Vue.js
   - Bulma css

## Instalacja

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/twoje-nazwa-użytkownika/co-zjesc.git
   cd co-zjesc

2. Utwórz plik .env w katalogu głównym backendu i wypełnij wymagane:

   ```bash
   DATABASE_NAME=
   DATABASE_USER=
   DATABASE_PASSWORD=
   DATABASE_HOST=
   DATABASE_PORT=
   SPOONACULAR_API_KEY=
   SECRET_KEY=
   DEBUG=
   ALLOWED_HOSTS=
   
   SUPERUSER_USERNAME=
   SUPERUSER_EMAIL=
   SUPERUSER_PASSWORD=

3. Uruchomienie

   Korzystając z Dockera

      W głównym katalogu projektu
      ```bash
      docker-compose up --build
      ```

      
   Bez dockera
   
      W katalogu backend
      ```bash
      pip install -r requirements.txt
      python manage.py migrate
      python manage.py runserver
      ```

      W katalogo frontend
      ```bash
      npm install
      npm run serve
      ```
