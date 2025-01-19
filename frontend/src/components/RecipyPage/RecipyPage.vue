<template>
  <section class="section">
    <div class="container">
      <!-- Loading and Error States -->
      <div v-if="loading" class="notification is-info">{{ translations.loadingRecipe }}</div>
      <div v-else-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </div>
      <div v-else>
        <!-- Recipe Title -->
        <h1 class="title has-text-centered">{{ recipe.title }}</h1>

        <!-- Recipe Image -->
        <figure class="image is-16by9 mb-4">
          <img :src="recipe.image" :alt="recipe.title" />
        </figure>

        <!-- Favorite Button -->
        <div v-if="isLoggedIn" class="has-text-centered mb-4">
          <button
            @click="toggleFavorite"
            class="button"
            :class="isFavorite ? 'is-danger' : 'is-primary'"
          >
            {{ isFavorite ? translations.removeFromFavorites : translations.addToFavorites }}
          </button>
        </div>

        <!-- Shopping List Button -->
        <div v-if="isLoggedIn" class="has-text-centered mb-4">
          <button @click="toggleShoppingListPopup" class="button is-success">
            {{ translations.generateShoppingList }}
          </button>
        </div>

        <ShoppingListPopup
          :ingredients="recipe.extendedIngredients"
          :isVisible="isShoppingListVisible"
          @close="toggleShoppingListPopup"
        />

        <!-- Summary -->
        <div class="content mb-5">
          <h2 class="recipy-subtitle">{{ translations.summary }}</h2>
          <p v-html="cleanText(recipe.summary)"></p>
        </div>

        <!-- Ingredients -->
        <div class="recipy-box mb-5">
          <h2 class="recipy-subtitle">{{ translations.ingredients }}</h2>
          <ul>
            <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
              {{ ingredient.original }}
            </li>
          </ul>
        </div>

        <!-- Instructions -->
        <div class="recipy-box mb-5">
          <h2 class="recipy-subtitle">{{ translations.instructions }}</h2>
          <div v-if="recipe.analyzedInstructions && recipe.analyzedInstructions.length">
            <div v-for="(instruction, index) in recipe.analyzedInstructions" :key="index">
              <div>
                <div v-for="(step, stepIndex) in instruction.steps" :key="stepIndex" class="mb-2">
                  <strong>{{ translations.step }} {{ step.number }}:</strong> {{ step.step }}
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>{{ translations.noInstructions }}</p>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="recipy-box mb-5">
          <h2 class="recipy-subtitle">{{ translations.additionalInfo }}</h2>
          <div class="columns">
            <div class="column">
              <p><strong>{{ translations.servings }}:</strong> {{ recipe.servings }}</p>
              <p><strong>{{ translations.readyIn }}:</strong> {{ recipe.readyInMinutes }} {{ translations.minutes }}</p>
              <p><strong>{{ translations.healthScore }}:</strong> {{ recipe.healthScore }}</p>
              <p><strong>{{ translations.pricePerServing }}:</strong> ${{ recipe.pricePerServing / 100 }}</p>
            </div>
            <div class="column">
              <p><strong>{{ translations.dietaryInfo }}:</strong></p>
              <ul>
                <li v-if="recipe.vegetarian">{{ translations.vegetarian }}</li>
                <li v-if="recipe.vegan">{{ translations.vegan }}</li>
                <li v-if="recipe.glutenFree">{{ translations.glutenFree }}</li>
                <li v-if="recipe.dairyFree">{{ translations.dairyFree }}</li>
                <li v-else>{{ translations.noDietaryRestrictions }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- External Source -->
        <div class="has-text-centered">
          <a
            :href="recipe.sourceUrl"
            target="_blank"
            class="button is-link is-light"
          >
            {{ translations.viewFullRecipeSource }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script src="./RecipyPage.js"></script>

<style scoped src="./RecipyPage.css"></style>