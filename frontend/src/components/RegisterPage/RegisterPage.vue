<template>
  <div class="columns is-centered is-vcentered is-mobile">
    <div class="column is-half">
      <h1 class="title has-text-centered">{{ translations.register.title }}</h1>
      <form @submit.prevent="handleRegister" class="box">
        <div class="field">
          <label class="field-label is-dark">{{ translations.register.firstNameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.register.firstNamePlaceholder"
              v-model="first_name"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.register.lastNameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.register.lastNamePlaceholder"
              v-model="last_name"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.register.usernameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.register.usernamePlaceholder"
              v-model="username"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.register.emailLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="email"
              :placeholder="translations.register.emailPlaceholder"
              v-model="email"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.register.passwordLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="password"
              :placeholder="translations.register.passwordPlaceholder"
              v-model="password"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth" type="submit">
              {{ translations.register.button }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>



<script src="./RegisterPage.js"></script>

<style src="./RegisterPage.css"></style>
