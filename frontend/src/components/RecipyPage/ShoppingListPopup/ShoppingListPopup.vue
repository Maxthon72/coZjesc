<template>
    <div v-if="isVisible" class="popup-overlay">
      <div class="popup">
        <button class="close-button" @click="$emit('close')">✖</button>
        <h2 class="title">Shopping List</h2>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient.id">
            <label>
              <input type="checkbox" v-model="selectedIngredients" :value="ingredient.original" />
              {{ ingredient.original }}
            </label>
          </li>
        </ul>
        <button class="button is-primary" @click="generateShoppingList">
          Generate Shopping List
        </button>
      </div>
    </div>
</template>
  

  <script src="./ShoppingListPopup.js"></script>
  <style src="./ShoppingListPopup.css"></style>
  