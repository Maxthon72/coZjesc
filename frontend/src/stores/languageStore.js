import { reactive } from "vue";

export const languageStore = reactive({
    language: localStorage.getItem("language") || "en",
    translations: {
        en: {
            registerTitle: "Register",
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
            registerButton: "Register",
            registrationSuccess: "Registration successful!",
            registrationFailed: "Registration failed!",
        },
        pl: {
            registerTitle: "Rejestracja",
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
            registerButton: "Zarejestruj się",
            registrationSuccess: "Rejestracja zakończona sukcesem!",
            registrationFailed: "Rejestracja nie powiodła się!",
        },
    },
    setLanguage(newLanguage) {
        this.language = newLanguage;
        localStorage.setItem("language", newLanguage);
    },
});