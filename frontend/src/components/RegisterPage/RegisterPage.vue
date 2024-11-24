<template>
    <div class="container is-max-desktop">
      <section class="section">
        <h1 class="title has-text-centered">Register Page</h1>
        <form @submit.prevent="handleRegister" class="box">
          <div class="field">
            <label class="label">Username</label>
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
            <label class="label">Email</label>
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
            <label class="label">Password</label>
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
      </section>
    </div>
  </template>
  
  <script src="./RegisterPage.js"></script>

  <style src="./RegisterPage.css"></style>
  