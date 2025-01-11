<template>
    <div class="favorite-recipes">
      <h2 class="title has-text-centered">Favorite Recipes</h2>
      <div v-if="loading" class="notification is-info">Loading favorite recipes...</div>
      <div v-if="errorMessage" class="notification is-danger">{{ errorMessage }}</div>
      <div v-else>
        <ul>
          <li v-for="recipe in favoriteRecipes" :key="recipe.id" class="recipe-item">
            <p><strong>{{ recipe.title }}</strong></p>
            <img :src="recipe.image" :alt="recipe.title" class="recipe-image" />
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script src="./FavoriteRecipes.js"></script>
  <style src="./FavoriteRecipes.css"></style>