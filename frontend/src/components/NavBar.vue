<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <strong>Co zjeść</strong>
        </router-link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div :class="{'navbar-menu': true, 'is-active': isMenuActive}">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/" v-if="isLoggedIn">Strona główna</router-link>
          <router-link class="navbar-item" to="/profile" v-if="isLoggedIn">Profil</router-link>
          <router-link class="navbar-item" to="/login" v-if="!isLoggedIn">Zaloguj się</router-link>
          <router-link class="navbar-item" to="/register" v-if="!isLoggedIn">Zarejestruj się</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item" v-if="isLoggedIn">
            <button class="button is-danger" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    data() {
      return {
        isLoggedIn: false, // Default: user is not logged in
        isMenuActive: false, // For responsive burger menu
      };
    },
    methods: {
      logout() {
        this.isLoggedIn = false;
        localStorage.removeItem("token"); // Remove token from localStorage
        this.$router.push("/login"); // Redirect to login page
      },
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive; // Toggle burger menu
      },
    },
    mounted() {
      // Check if the user is logged in by looking for a token in localStorage
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token; // Set logged-in status based on token presence
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-item {
    font-weight: 500;
  }
  
  .navbar-burger {
    color: #4a4a4a;
  }
  </style>
  