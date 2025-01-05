<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Search Recipes</h1>
      <div class="columns">
        <!-- Left Column: Search Options -->
        <div class="column is-one-quarter">
          <form @submit.prevent="searchRecipes" class="box">
            <!-- Cuisine -->
            <div class="search-field">
              <label class="label">Cuisine</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="cuisine">
                    <option value="">Select cuisine</option>
                    <option v-for="option in cuisines" :key="option" :value="option">
                      {{ option }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Diet -->
            <div class="search-field">
              <label class="label">Diet</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="diet">
                    <option value="">Select diet</option>
                    <option v-for="option in diets" :key="option" :value="option">
                      {{ option }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Intolerances -->
            <div class="search-field">
              <label class="label">Intolerances</label>
              <div class="control">
                <div class="checkbox-group">
                  <label
                    v-for="option in intolerances"
                    :key="option"
                    class="checkbox"
                  >
                    <input
                      type="checkbox"
                      :value="option"
                      v-model="selectedIntolerances"
                    />
                    {{ option }}
                  </label>
                </div>
              </div>
            </div>

            <!-- Meal Type -->
            <div class="search-field">
              <label class="label">Meal Type</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="mealType">
                    <option value="">Select meal type</option>
                    <option v-for="option in mealTypes" :key="option" :value="option">
                      {{ option }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Max Ready Time -->
            <div class="search-field">
              <label class="label">Max Ready Time (minutes)</label>
              <div class="control">
                <input
                  v-model="maxReadyTime"
                  class="input"
                  type="number"
                  placeholder="Enter max ready time (e.g., 30)"
                />
              </div>
            </div>

            <!-- Number -->
            <div class="search-field">
              <label class="label">Number of Recipes</label>
              <div class="control">
                <input
                  v-model="number"
                  class="input"
                  type="number"
                  placeholder="Enter number of recipes (e.g., 10)"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <div class="search-field">
              <div class="control">
                <button class="button is-primary is-fullwidth" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Right Column: Recipe Results -->
        <div class="column">
          <!-- Loading & Error States -->
          <div v-if="loading" class="notification is-info">Loading...</div>
          <div v-if="errorMessage" class="notification is-danger">{{ errorMessage }}</div>

          <!-- Results -->
          <div v-if="results.length">
            <div v-for="recipe in paginatedResults" :key="recipe.id" class="horizontal-recipe">
              <div class="recipe-card" @click="goToRecipe(recipe.id)">
                <img :src="recipe.image" :alt="recipe.title" class="recipe-image" />
                <div class="recipe-content">
                  <h2 class="recipe-title">{{ recipe.title }}</h2>
                  <p class="recipe-description">Click to view details</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav
            v-if="results.length > itemsPerPage"
            class="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            <button
              class="pagination-previous"
              :disabled="currentPage === 1"
              @click="currentPage--"
            >
              Previous
            </button>
            <button
              class="pagination-next"
              :disabled="currentPage === totalPages"
              @click="currentPage++"
            >
              Next
            </button>
            <ul class="pagination-list">
              <li v-for="page in totalPages" :key="page">
                <button
                  class="pagination-link"
                  :class="{ 'is-current': currentPage === page }"
                  @click="currentPage = page"
                >
                  {{ page }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./SearchPage.js"></script>

<style scoped src="./SearchPage.css"></style>
