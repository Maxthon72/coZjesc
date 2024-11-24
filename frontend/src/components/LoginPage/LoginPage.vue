<template>
    <div class="container is-max-desktop">
      <section class="section">
        <h1 class="title has-text-centered">Login Page</h1>
        <form @submit.prevent="handleLogin" class="box">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter your username"
                v-model="username"
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
              />
            </div>
          </div>
  
          <div class="field">
            <div class="control">
              <button class="button is-primary is-fullwidth" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </template>
  
  <script src="./LoginPage.js"></script>

  <style src="./LoginPage.css"></style>