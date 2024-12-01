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

                // Store the token in localStorage or Vuex
                localStorage.setItem("authToken", response.data.token);

                // Redirect to another page or show a success message
                this.$router.push("/profile");
            } catch (error) {
                // Handle errors
                if (error.response && error.response.data) {
                    this.errorMessage = error.response.data.error || "Invalid credentials";
                } else {
                    this.errorMessage = "An error occurred. Please try again.";
                }
            }
        },
    },
};