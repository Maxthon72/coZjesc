<template>
  <section class="section">
    <div class="container">
      <!-- Loading and Error States -->
      <div v-if="loading" class="notification is-info">{{ translations.recipe.loading }}</div>
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
            {{ isFavorite ? translations.recipe.removeFromFavorites : translations.recipe.addToFavorites }}
          </button>
        </div>

        <!-- Shopping List Button -->
        <div v-if="isLoggedIn" class="has-text-centered mb-4">
          <button @click="toggleShoppingListPopup" class="button is-success">
            {{ translations.recipe.generateShoppingList }}
          </button>
        </div>

        <ShoppingListPopup
          :ingredients="recipe.extendedIngredients"
          :isVisible="isShoppingListVisible"
          @close="toggleShoppingListPopup"
        />

        <!-- Summary -->
        <div class="content mb-5">
          <h2 class="recipy-subtitle">{{ translations.recipe.summary }}</h2>
          <p v-html="cleanText(recipe.summary)"></p>
        </div>

        <!-- Ingredients -->
        <div class="recipy-box mb-5">
          <h2 class="recipy-subtitle">{{ translations.recipe.ingredients }}</h2>
          <ul>
            <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
              {{ ingredient.original }}
            </li>
          </ul>
        </div>

        <!-- Instructions -->
        <div class="recipy-box mb-5">
          <h2 class="recipy-subtitle">{{ translations.recipe.instructions }}</h2>
          <div v-if="recipe.analyzedInstructions && recipe.analyzedInstructions.length">
            <div v-for="(instruction, index) in recipe.analyzedInstructions" :key="index">
              <div>
                <div v-for="(step, stepIndex) in instruction.steps" :key="stepIndex" class="mb-2">
                  <strong>{{ translations.recipe.step }} {{ step.number }}:</strong> {{ step.step }}
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>{{ translations.recipe.noInstructions }}</p>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="recipy-box mb-5">
          <h2 class="recipy-subtitle">{{ translations.recipe.additionalInfo }}</h2>
          <div class="columns">
            <div class="column">
              <p><strong>{{ translations.recipe.servings }}:</strong> {{ recipe.servings }}</p>
              <p><strong>{{ translations.recipe.readyIn }}:</strong> {{ recipe.readyInMinutes }} {{ translations.recipe.minutes }}</p>
              <p><strong>{{ translations.recipe.healthScore }}:</strong> {{ recipe.healthScore }}</p>
              <p><strong>{{ translations.recipe.pricePerServing }}:</strong> ${{ (recipe.pricePerServing / 100).toFixed(2) }}</p>
            </div>
            <div class="column">
              <p><strong>{{ translations.recipe.dietaryInfo }}:</strong></p>
              <ul>
                <li v-if="recipe.vegetarian">{{ translations.recipe.vegetarian }}</li>
                <li v-if="recipe.vegan">{{ translations.recipe.vegan }}</li>
                <li v-if="recipe.glutenFree">{{ translations.recipe.glutenFree }}</li>
                <li v-if="recipe.dairyFree">{{ translations.recipe.dairyFree }}</li>
                <li v-else>{{ translations.recipe.noDietaryRestrictions }}</li>
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
            {{ translations.recipe.viewFullSource }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

  
<script src="./RecipyPage.js"></script>

<style scoped src="./RecipyPage.css"></style>