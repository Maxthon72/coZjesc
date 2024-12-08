<template>
  <div class="container is-max-desktop">
    <section class="section">
      <div v-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </div>

      <div v-else-if="loading" class="notification is-info">
        Loading user information...
      </div>

      <div v-else>
        <h1 class="title has-text-centered">User Profile</h1>
        <div class="box">
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>First Name:</strong> {{ user.first_name }}</p>
          <p><strong>Last Name:</strong> {{ user.last_name }}</p>
          <p><strong>Staff:</strong> {{ user.is_staff ? "Yes" : "No" }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script src="./ProfilePage.js"></script>

  <style src="./ProfilePage.css"></style>
  