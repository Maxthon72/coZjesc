import { reactive } from "vue";

export const languageStore = reactive({
    language: localStorage.getItem("language") || "en",
    translations: {
        en: {
            // Common
            common: {
                loading: "Loading...",
                failedToLoad: "Failed to load data.",
                yes: "Yes",
                no: "No",
            },
            // Register Page
            register: {
                title: "Register",
                firstNameLabel: "First Name",
                firstNamePlaceholder: "Enter your first name",
                lastNameLabel: "Last Name",
                lastNamePlaceholder: "Enter your last name",
                usernameLabel: "Username",
                usernamePlaceholder: "Enter your username",
                emailLabel: "Email",
                emailPlaceholder: "Enter your email",
                passwordLabel: "Password",
                passwordPlaceholder: "Enter your password",
                button: "Register",
                success: "Registration successful!",
                failed: "Registration failed!",
            },
            // Login Page
            login: {
                title: "Login Page",
                usernameLabel: "Username",
                usernamePlaceholder: "Enter your username",
                passwordLabel: "Password",
                passwordPlaceholder: "Enter your password",
                button: "Login",
                invalidCredentials: "Invalid credentials",
                error: "An error occurred. Please try again.",
            },
            // Profile Page
            profile: {
                loading: "Loading user information...",
                title: "User Profile",
                userInfoTab: "User Info",
                tempPageTab: "Placeholder Page",
                favoritesTab: "Favorite Recipes",
                username: "Username",
                email: "Email",
                firstName: "First Name",
                lastName: "Last Name",
                staff: "Staff",
                noToken: "No token found.",
                error: "Failed to load user information.",
            },
            nav: {
                searchRecipes: "Search Recipes",
                yourProfile: "Your Profile",
                logout: "Logout",
                login: "Login",
                register: "Register",
            },
            // Recipe Page
            recipe: {
                loading: "Loading recipe...",
                addToFavorites: "Add to Favorites",
                removeFromFavorites: "Remove from Favorites",
                generateShoppingList: "Generate Shopping List",
                summary: "Summary",
                ingredients: "Ingredients",
                instructions: "Instructions",
                step: "Step",
                noInstructions: "No instructions available for this recipe.",
                additionalInfo: "Additional Information",
                servings: "Servings",
                readyIn: "Ready in",
                minutes: "minutes",
                healthScore: "Health Score",
                pricePerServing: "Price per Serving",
                dietaryInfo: "Dietary Information",
                vegetarian: "Vegetarian",
                vegan: "Vegan",
                glutenFree: "Gluten Free",
                dairyFree: "Dairy Free",
                noDietaryRestrictions: "No dietary restrictions",
                viewFullSource: "View Full Recipe Source",
                failedToLoad: "Failed to load recipe information.",
            },
            // Home Page
            home: {
                featuredRecipes: "Featured Recipes",
                viewMore: "View More",
            },
        },
        pl: {
            // Common
            common: {
                loading: "Ładowanie...",
                failedToLoad: "Nie udało się załadować danych.",
                yes: "Tak",
                no: "Nie",
            },
            // Register Page
            register: {
                title: "Rejestracja",
                firstNameLabel: "Imię",
                firstNamePlaceholder: "Wpisz swoje imię",
                lastNameLabel: "Nazwisko",
                lastNamePlaceholder: "Wpisz swoje nazwisko",
                usernameLabel: "Nazwa użytkownika",
                usernamePlaceholder: "Wpisz swoją nazwę użytkownika",
                emailLabel: "Email",
                emailPlaceholder: "Wpisz swój adres email",
                passwordLabel: "Hasło",
                passwordPlaceholder: "Wpisz swoje hasło",
                button: "Zarejestruj się",
                success: "Rejestracja zakończona sukcesem!",
                failed: "Rejestracja nie powiodła się!",
            },
            nav: {
                searchRecipes: "Szukaj przepisów",
                yourProfile: "Twój profil",
                logout: "Wyloguj się",
                login: "Zaloguj się",
                register: "Zarejestruj się",
            },
            // Login Page
            login: {
                title: "Strona logowania",
                usernameLabel: "Nazwa użytkownika",
                usernamePlaceholder: "Wprowadź nazwę użytkownika",
                passwordLabel: "Hasło",
                passwordPlaceholder: "Wprowadź swoje hasło",
                button: "Zaloguj się",
                invalidCredentials: "Nieprawidłowe dane uwierzytelniające",
                error: "Wystąpił błąd. Spróbuj ponownie.",
            },
            // Profile Page
            profile: {
                loading: "Ładowanie informacji o użytkowniku...",
                title: "Profil użytkownika",
                userInfoTab: "Informacje o użytkowniku",
                tempPageTab: "Strona tymczasowa",
                favoritesTab: "Ulubione przepisy",
                username: "Nazwa użytkownika",
                email: "Email",
                firstName: "Imię",
                lastName: "Nazwisko",
                staff: "Personel",
                noToken: "Nie znaleziono tokenu.",
                error: "Nie udało się załadować informacji o użytkowniku.",
            },
            // Recipe Page
            recipe: {
                loading: "Ładowanie przepisu...",
                addToFavorites: "Dodaj do ulubionych",
                removeFromFavorites: "Usuń z ulubionych",
                generateShoppingList: "Wygeneruj listę zakupów",
                summary: "Podsumowanie",
                ingredients: "Składniki",
                instructions: "Instrukcje",
                step: "Krok",
                noInstructions: "Brak instrukcji dla tego przepisu.",
                additionalInfo: "Dodatkowe informacje",
                servings: "Porcje",
                readyIn: "Gotowe w",
                minutes: "minut",
                healthScore: "Ocena zdrowotna",
                pricePerServing: "Cena za porcję",
                dietaryInfo: "Informacje dietetyczne",
                vegetarian: "Wegetariańskie",
                vegan: "Wegańskie",
                glutenFree: "Bezglutenowe",
                dairyFree: "Bez nabiału",
                noDietaryRestrictions: "Brak ograniczeń dietetycznych",
                viewFullSource: "Zobacz pełny przepis",
                failedToLoad: "Nie udało się załadować informacji o przepisie.",
            },
            // Home Page
            home: {
                featuredRecipes: "Wyróżnione przepisy",
                viewMore: "Zobacz więcej",
            },
        },
    },
    setLanguage(newLanguage) {
        this.language = newLanguage;
        localStorage.setItem("language", newLanguage);
    },
});