<template>
    <section class="section">
      <div class="container">
        <!-- Loading and Error States -->
        <div v-if="loading" class="notification is-info">Loading recipe...</div>
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
  
          <!-- Summary -->
          <div class="content mb-5">
            <h2 class="subtitle">Summary</h2>
            <p v-html="cleanText(recipe.summary)"></p>
          </div>
  
          <!-- Ingredients -->
          <div class="box mb-5">
            <h2 class="subtitle">Ingredients</h2>
            <ul>
              <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
                {{ ingredient.original }}
              </li>
            </ul>
          </div>
  
          <!-- Instructions -->
            <div class="box mb-5">
                <h2 class="subtitle">Instructions</h2>
                <div v-if="recipe.analyzedInstructions && recipe.analyzedInstructions.length">
                    <div v-for="(instruction, index) in recipe.analyzedInstructions" :key="index">
                    <ol>
                        <li v-for="(step, stepIndex) in instruction.steps" :key="stepIndex" class="mb-2">
                        <strong>Step {{ step.number }}:</strong> {{ step.step }}
                        </li>
                    </ol>
                    </div>
                </div>
                <div v-else>
                    <p>No instructions available for this recipe.</p>
                </div>
            </div>
  
          <!-- Additional Information -->
          <div class="box mb-5">
            <h2 class="subtitle">Additional Information</h2>
            <div class="columns">
              <div class="column">
                <p><strong>Servings:</strong> {{ recipe.servings }}</p>
                <p><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</p>
                <p><strong>Health Score:</strong> {{ recipe.healthScore }}</p>
                <p><strong>Price per Serving:</strong> ${{ recipe.pricePerServing / 100 }}</p>
              </div>
              <div class="column">
                <p><strong>Dietary Information:</strong></p>
                <ul>
                  <li v-if="recipe.vegetarian">Vegetarian</li>
                  <li v-if="recipe.vegan">Vegan</li>
                  <li v-if="recipe.glutenFree">Gluten Free</li>
                  <li v-if="recipe.dairyFree">Dairy Free</li>
                  <li v-else>No dietary restrictions</li>
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
              View Full Recipe Source
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script src="./RecipyPage.js"></script>

<style scoped src="./RecipyPage.css"></style>