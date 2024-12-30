<template>
  <div class="columns is-centered is-vcentered is-mobile">
    <div class="column is-half">
      <h1 class="title has-text-centered">Register</h1>
      <form @submit.prevent="handleRegister" class="box">
        <div class="field">
          <label class="field-label is-dark">First Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter your first name"
              v-model="first_name"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">Last Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter your last name"
              v-model="last_name"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">Username</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter your username"
              v-model="username"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Enter your email"
              v-model="email"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="field-label is-dark">Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Enter your password"
              v-model="password"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./RegisterPage.js"></script>

<style src="./RegisterPage.css"></style>
