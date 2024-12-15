<template>
    <div class="container is-max-desktop temp-page">
      <section class="section">
        <div class="notification is-warning has-text-centered">
          <h1 class="title is-3">Under Construction</h1>
          <p class="subtitle is-5">
            This page is not yet implemented. Check back later!
          </p>
          <router-link class="button is-primary is-rounded mt-4" to="/">
            Return to Home
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "TempPage",
  };
  </script>
  
  <style scoped>
  .temp-page {
    margin-top: 4rem;
    text-align: center;
  }
  
  .notification {
    background-color: #ffdd57; /* Warning yellow */
    color: #363636; /* Dark text */
  }
  
  .button {
    margin-top: 1rem;
  }
  </style>
  