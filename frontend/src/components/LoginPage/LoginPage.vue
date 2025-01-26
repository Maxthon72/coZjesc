<template>
  <div class="container is-max-desktop">
    <section class="section">
      <h1 class="title has-text-centered">{{ translations.login.title }}</h1>
      <form @submit.prevent="handleLogin" class="box">
        <div v-if="errorMessage" class="notification is-danger">
          {{ errorMessage }}
        </div>
        <div class="field">
          <label class="field-label is-dark">{{ translations.login.usernameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.login.usernamePlaceholder"
              v-model="username"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.login.passwordLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="password"
              :placeholder="translations.login.passwordPlaceholder"
              v-model="password"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth" type="submit">
              {{ translations.login.button }}
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>


  
  <script src="./LoginPage.js"></script>

  <style src="./LoginPage.css"></style>