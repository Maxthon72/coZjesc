<template>
  <div v-if="isVisible" class="popup-overlay">
    <div class="popup">
      <button class="close-button" @click="$emit('close')">✖</button>
      <h2 class="title">Shopping List</h2>
      <ul class="popup-ingredients-list">
        <li v-for="ingredient in ingredients" :key="ingredient.id">
          <label class="popup-label">
            <input type="checkbox" v-model="selectedIngredients" :value="ingredient.original" />
            {{ ingredient.original }}
          </label>
        </li>
      </ul>
      <div class="field">
        <label class="label popup-label">File Format</label>
        <div class="control">
          <div class="select">
            <select v-model="selectedFormat">
              <option value="txt">TXT</option>
              <option value="docx">DOCX</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
        </div>
      </div>
      <button class="button is-primary" @click="generateShoppingList">
        Generate Shopping List
      </button>
    </div>
  </div>
</template>


  

  <script src="./ShoppingListPopup.js"></script>
  <style src="./ShoppingListPopup.css"></style>
  