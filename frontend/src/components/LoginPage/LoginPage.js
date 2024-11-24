export default {
    name: "LoginPage",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        handleLogin() {
            console.log("Logging in:", this.username, this.password);
            // Add logic for sending data to the backend
        },
    },
};