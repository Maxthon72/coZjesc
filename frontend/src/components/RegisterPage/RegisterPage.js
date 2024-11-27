import { registerUser } from "../../services/authService";

export default {
    name: "RegisterPage",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            errorMessage: "",
            successMessage: "",
        };
    },
    methods: {
        async handleRegister() {
            this.errorMessage = "";
            this.successMessage = "";
            try {
                const response = await registerUser(this.username, this.email, this.password);
                this.successMessage = response.message;
                this.username = "";
                this.email = "";
                this.password = "";
                // Optional: Redirect to login page
                this.$router.push("/login");
            } catch (error) {
                this.errorMessage = error.error || "An error occurred.";
            }
        },
    },
};