<template>
  <div class="container is-max-desktop">
    <section class="section">
      <div v-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </div>

      <div v-else-if="loading" class="notification is-info">
        {{ translations.profile.loading }}
      </div>

      <div v-else>
        <h1 class="profile-title has-text-centered">{{ translations.profile.title }}</h1>
        <!-- Tabs -->
        <div class="tabs is-centered is-boxed">
          <ul>
            <li :class="{ 'is-active': activeTab === 'info' }" @click="activeTab = 'info'">
              <a>{{ translations.profile.userInfoTab }}</a>
            </li>
            <li :class="{ 'is-active': activeTab === 'temp' }" @click="activeTab = 'temp'">
              <a>{{ translations.profile.tempPageTab }}</a>
            </li>
            <li :class="{ 'is-active': activeTab === 'favorites' }" @click="activeTab = 'favorites'">
              <a>{{ translations.profile.favoritesTab }}</a>
            </li>
          </ul>
        </div>

        <!-- Tab Content -->
        <div>
          <div v-if="activeTab === 'info'" class="box">
            <p><strong>{{ translations.profile.username }}:</strong> {{ user.username }}</p>
            <p><strong>{{ translations.profile.email }}:</strong> {{ user.email }}</p>
            <p><strong>{{ translations.profile.firstName }}:</strong> {{ user.first_name }}</p>
            <p><strong>{{ translations.profile.lastName }}:</strong> {{ user.last_name }}</p>
            <p>
              <strong>{{ translations.profile.staff }}:</strong>
              {{ user.is_staff ? translations.common.yes : translations.common.no }}
            </p>
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
