import axios from "axios";

export default {
    name: "LoginPage",
    data() {
        return {
            username: "",
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/users/login/", {
                    username: this.username,
                    password: this.password,
                });

                localStorage.setItem("authToken", response.data.token);

                // Reload the page and redirect to home
                window.location.reload();
                this.$router.push("/");
            } catch (error) {
                if (error.response && error.response.data) {
                    this.errorMessage = error.response.data.error || "Invalid credentials";
                } else {
                    this.errorMessage = "An error occurred. Please try again.";
                }
            }
        },
    },
    mounted() {
        const token = localStorage.getItem("authToken");
        if (token) {
            this.$router.push("/"); // Redirect to home if already logged in
        }
    },
};