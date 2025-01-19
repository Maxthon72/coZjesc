import axios from "axios";
import { languageStore } from "@/stores/languageStore";

export default {
    name: "RegisterPage",
    data() {
        return {
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
        };
    },
    computed: {
        translations() {
            return languageStore.translations[languageStore.language]; // Get translations for the current language
        },
    },
    methods: {
        handleRegister() {
            const payload = {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                email: this.email,
                password: this.password,
            };

            axios
                .post("http://127.0.0.1:8000/api/users/register/", payload)
                .then(() => {
                    alert(this.translations.registrationSuccess);
                    this.$router.push("/login");
                })
                .catch((error) => {
                    console.error(error);
                    alert(this.translations.registrationFailed);
                });
        },
    },
};