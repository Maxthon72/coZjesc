<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="handleLogin">
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
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
        // Tutaj możesz dodać logikę wysyłania danych do backendu
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  </style>
  