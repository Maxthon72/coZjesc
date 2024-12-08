<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item is-size-4 has-text-weight-bold" to="/">
          Co Zjeść
        </router-link>

        <!-- Mobile Burger Menu -->
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          @click="toggleBurger"
          :class="{ 'is-active': isBurgerActive }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': isBurgerActive }">
        <div class="navbar-end">
          <div class="navbar-item">
            <div v-if="isLoggedIn" class="buttons">
              <router-link class="button is-light is-rounded" to="/profile">
                Your Profile
              </router-link>
              <button class="button is-danger is-rounded" @click="handleLogout">Logout</button>
            </div>
            <div v-else class="buttons">
              <router-link class="button is-light is-rounded" to="/login">Login</router-link>
              <router-link class="button is-primary is-rounded" to="/register">
                Register
              </router-link>
            </div>
          </div>
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
      isLoggedIn: false,
      isBurgerActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    handleLogout() {
      localStorage.removeItem("authToken");
      this.isLoggedIn = false;
      this.$router.push("/");
    },
  },
  mounted() {
    const token = localStorage.getItem("authToken");
    this.isLoggedIn = !!token;
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-brand .navbar-item {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-end .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
}

.button {
  text-transform: capitalize;
  margin-top: 0px;
}

.navbar-burger span {
  background-color: white;
}
</style>
