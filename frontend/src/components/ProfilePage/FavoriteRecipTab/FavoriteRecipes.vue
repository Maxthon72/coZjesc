<template>
    <div>
      <div v-if="loading" class="notification is-info">Loading favorite recipes...</div>
      <div v-else-if="errorMessage" class="notification is-danger">{{ errorMessage }}</div>
      <div v-else>
        <h2 class="title">Favorite Recipes</h2>
        <div v-if="favoriteRecipes.length === 0" class="notification is-warning">
          No favorite recipes found.
        </div>
        <div v-else class="columns is-multiline">
          <div
            v-for="recipe in favoriteRecipes"
            :key="recipe.id"
            class="column is-one-third"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="recipe.image" :alt="recipe.title" />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-5">{{ recipe.title }}</p>
                <p class="subtitle is-6">Ready in {{ recipe.readyInMinutes }} minutes</p>
                <p>Servings: {{ recipe.servings }}</p>
                <a
                  :href="`/recipe/${recipe.id}`"
                  class="button is-primary is-light"
                >
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script src="./FavoriteRecipes.js"></script>
  <style src="./FavoriteRecipes.css"></style>