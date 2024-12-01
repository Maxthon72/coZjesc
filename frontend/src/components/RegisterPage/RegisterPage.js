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
    methods: {
        handleRegister() {
            const payload = {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                email: this.email,
                password: this.password,
            };

            // Send registration data to the backend
            axios
                .post("http://127.0.0.1:8000/api/users/register/", payload)
                .then((response) => {
                    console.log(response.data);
                    alert("Registration successful!");
                    this.$router.push("/login");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Registration failed!");
                });
        },
    },
};