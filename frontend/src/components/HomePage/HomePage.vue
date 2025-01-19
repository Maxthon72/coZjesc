<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3 has-text-light has-text-centered">
        {{ translations.featuredRecipes }}
      </h2>

      <div v-if="loading" class="notification is-info">
        {{ translations.loading }}
      </div>
      <div v-else-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </div>
      <div v-else class="columns is-multiline">
        <div class="column is-4" v-for="recipe in recipes" :key="recipe.id">
          <div class="card card-dark">
            <!-- Image with router-link -->
            <router-link :to="`/recipe/${recipe.id}`">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    :src="recipe.image || 'https://via.placeholder.com/300x200'"
                    :alt="recipe.title"
                  />
                </figure>
              </div>
            </router-link>

            <!-- Content -->
            <div class="card-content has-background-dark">
              <router-link :to="`/recipe/${recipe.id}`" class="title-link">
                <p class="title is-5 has-text-light">{{ recipe.title }}</p>
              </router-link>
              <p class="subtitle is-6 has-text-grey-lighter">
                {{ cleanText(recipe.summary) }}
              </p>
              <router-link :to="`/recipe/${recipe.id}`">
                <button class="button is-link is-small">
                  {{ translations.viewMore }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./HomePage.js"></script>

<style src="./HomePage.css"></style>
