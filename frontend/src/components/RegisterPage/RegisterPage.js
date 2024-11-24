export default {
    name: "RegisterPage",
    data() {
        return {
            username: "",
            email: "",
            password: "",
        };
    },
    methods: {
        handleRegister() {
            console.log("Registering:", this.username, this.email, this.password);
            // Add logic for sending data to the backend
        },
    },
};