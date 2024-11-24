<template>
    <nav>
      <ul class="nav">
        <!-- Pokaż różne elementy w zależności od stanu użytkownika -->
        <li v-if="isLoggedIn"><router-link to="/">Home</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/profile">Profile</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
        <li v-if="isLoggedIn"><button @click="logout">Logout</button></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    data() {
      return {
        isLoggedIn: false, // Domyślnie użytkownik nie jest zalogowany
      };
    },
    methods: {
      logout() {
        // Dodaj funkcję wylogowania
        this.isLoggedIn = false;
        // Możesz także usunąć token użytkownika
        localStorage.removeItem("token");
        this.$router.push("/login"); // Przekierowanie po wylogowaniu
      },
    },
    mounted() {
      // Sprawdź, czy użytkownik jest zalogowany, np. sprawdzając token w LocalStorage
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token; // Jeżeli token istnieje, ustaw użytkownika jako zalogowanego
    },
  };
  </script>
  
  <style scoped>
  .nav {
    display: flex;
    list-style: none;
    background-color: #f4f4f4;
    padding: 1em;
    gap: 1em;
  }
  
  .nav li {
    cursor: pointer;
  }
  </style>
  