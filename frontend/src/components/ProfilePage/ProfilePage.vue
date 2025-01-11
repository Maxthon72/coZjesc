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
        <h1 class="profile-title has-text-centered">User Profile</h1>
        <!-- Tabs -->
        <div class="tabs is-centered is-boxed">
          <ul>
            <li :class="{ 'is-active': activeTab === 'info' }" @click="activeTab = 'info'">
              <a>User Info</a>
            </li>
            <li :class="{ 'is-active': activeTab === 'temp' }" @click="activeTab = 'temp'">
              <a>Placeholder Page</a>
            </li>
            <li :class="{ 'is-active': activeTab === 'favorites' }" @click="activeTab = 'favorites'">
              <a>Favorite Recipes</a>
            </li>
          </ul>
        </div>

        <!-- Tab Content -->
        <div>
          <div v-if="activeTab === 'info'" class="box">
            <p><strong>Username:</strong> {{ user.username }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>First Name:</strong> {{ user.first_name }}</p>
            <p><strong>Last Name:</strong> {{ user.last_name }}</p>
            <p><strong>Staff:</strong> {{ user.is_staff ? "Yes" : "No" }}</p>
          </div>
          <div v-else-if="activeTab === 'favorites'">
            <FavoriteRecipes />
          </div>
          <div v-else-if="activeTab === 'temp'">
            <TempPage />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./ProfilePage.js"></script>
<style src="./ProfilePage.css"></style>
