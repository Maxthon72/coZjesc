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
              <router-link class="button is-light is-rounded" to="/search-recipes">
                {{ translations.nav.searchRecipes }}
              </router-link>
              <router-link class="button is-light is-rounded" to="/profile">
                {{ translations.nav.yourProfile }}
              </router-link>
              <button class="button is-danger is-rounded" @click="handleLogout">
                {{ translations.nav.logout }}
              </button>
              <button class="button is-light is-rounded" @click="toggleLanguage">
                {{ language === "en" ? "PL" : "EN" }}
              </button>
            </div>
            <div v-else class="buttons">
              <router-link class="button is-light is-rounded" to="/login">
                {{ translations.nav.login }}
              </router-link>
              <router-link class="button is-primary is-rounded" to="/register">
                {{ translations.nav.register }}
              </router-link>
              <button class="button is-light is-rounded" @click="toggleLanguage">
                {{ language === "en" ? "EN" : "PL" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
import { languageStore } from "@/stores/languageStore";
import { checkIfLoggedIn } from "@/services/authService";
import { watch } from "vue";

export default {
  name: "NavBar",
  data() {
    return {
      isLoggedIn: false,
      isBurgerActive: false,
    };
  },
  computed: {
    language() {
      return languageStore.language;
    },
    translations() {
      return languageStore.translations[this.language];
    },
  },
  methods: {
    toggleBurger() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    toggleLanguage() {
      const newLanguage = this.language === "en" ? "pl" : "en";
      languageStore.setLanguage(newLanguage);
      console.log(`Language changed to: ${newLanguage}`);
    },
    handleLogout() {
      localStorage.removeItem("authToken");
      this.isLoggedIn = false;
      this.$router.push("/");
    },
    async checkLoginStatus() {
      try {
        await checkIfLoggedIn();
        this.isLoggedIn = true;
      } catch (error) {
        console.error("User is not logged in:", error);
        this.isLoggedIn = false;
      }
    },
  },
  async mounted() {
    // Check login status on mount
    await this.checkLoginStatus();

    // Debug watcher to log language changes
    watch(
      () => this.language,
      (newLang, oldLang) => {
        console.log(`Language changed from ${oldLang} to ${newLang}`);
      }
    );
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
