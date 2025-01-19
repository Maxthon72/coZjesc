<template>
  <div class="columns is-centered is-vcentered is-mobile">
    <div class="column is-half">
      <h1 class="title has-text-centered">{{ translations.registerTitle }}</h1>
      <form @submit.prevent="handleRegister" class="box">
        <div class="field">
          <label class="field-label is-dark">{{ translations.firstNameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.firstNamePlaceholder"
              v-model="first_name"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.lastNameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.lastNamePlaceholder"
              v-model="last_name"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.usernameLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              :placeholder="translations.usernamePlaceholder"
              v-model="username"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.emailLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="email"
              :placeholder="translations.emailPlaceholder"
              v-model="email"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">{{ translations.passwordLabel }}</label>
          <div class="control">
            <input
              class="input"
              type="password"
              :placeholder="translations.passwordPlaceholder"
              v-model="password"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth" type="submit">
              {{ translations.registerButton }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script src="./RegisterPage.js"></script>

<style src="./RegisterPage.css"></style>
