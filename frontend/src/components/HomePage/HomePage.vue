<template>
  <section class="section">
    <div class="container">
      <!-- Hero Section -->
      <div class="notification is-dark has-text-centered">
        <h1 class="title is-2 has-text-light">Co Zjeść?</h1>
        <p class="subtitle is-4 has-text-grey-lighter">
          Znajdź inspirację na kolejne danie!
        </p>
      </div>

      <!-- Featured Recipes -->
      <div class="content has-text-centered">
        <h2 class="title is-3 has-text-light">Wyróżnione przepisy</h2>
        <div class="columns is-multiline">
          <div class="column is-4" v-for="i in 6" :key="i">
            <div class="card card-dark">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div class="card-content has-background-dark">
                <p class="title is-5 has-text-light">Nazwa Przepisu</p>
                <p class="subtitle is-6 has-text-grey-lighter">
                  Krótki opis przepisu...
                </p>
                <button class="button is-dark is-small">Zobacz więcej</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="has-text-centered">
        <p class="is-size-5 has-text-grey-lighter">
          Masz własny przepis? Podziel się nim z naszą społecznością!
        </p>
        <button class="button is-link is-large is-light">Dodaj przepis</button>
      </div>
    </div>
  </section>
</template>

<script src="./HomePage.js"></script>

<style src="./HomePage.css"></style>
