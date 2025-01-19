import { getRecipeById } from "@/services/Spoonly";
import {
    isRecipeFavorite,
    addFavoriteRecipe,
    deleteFavoriteRecipe,
} from "@/services/favoriteRecipyService";
import { checkIfLoggedIn } from "@/services/authService";
import ShoppingListPopup from "@/components/RecipyPage/ShoppingListPopup/ShoppingListPopup.vue";
import { languageStore } from "@/stores/languageStore";

export default {
    components: {
        ShoppingListPopup,
    },
    name: "RecipePage",
    data() {
        return {
            recipe: null,
            loading: true,
            errorMessage: "",
            isFavorite: false,
            isLoggedIn: false,
            isShoppingListVisible: false,
        };
    },
    computed: {
        translations() {
            return languageStore.translations[languageStore.language];
        },
    },
    methods: {
        toggleShoppingListPopup() {
            this.isShoppingListVisible = !this.isShoppingListVisible;
        },
        cleanText(text) {
            return text.replace(/<\/?b>/g, "").replace(/<\/?a[^>]*>/g, "");
        },
        async checkUserLogin() {
            try {
                await checkIfLoggedIn();
                this.isLoggedIn = true;
            } catch (error) {
                this.isLoggedIn = false;
            }
        },
        async checkIfFavorite() {
            try {
                if (!this.isLoggedIn) return;
                this.isFavorite = await isRecipeFavorite(this.recipe.id);
            } catch (error) {
                console.error("Error checking if recipe is favorite:", error);
            }
        },
        async toggleFavorite() {
            try {
                if (!this.isLoggedIn) return;
                if (this.isFavorite) {
                    await deleteFavoriteRecipe(this.recipe.id);
                    this.isFavorite = false;
                } else {
                    await addFavoriteRecipe({ recipe_id: this.recipe.id });
                    this.isFavorite = true;
                }
            } catch (error) {
                console.error("Error toggling favorite status:", error);
            }
        },
    },
    async mounted() {
        const recipeId = this.$route.params.id;
        try {
            const response = await getRecipeById(recipeId);
            this.recipe = response;
            await this.checkUserLogin();
            await this.checkIfFavorite();
        } catch (error) {
            this.errorMessage = this.translations.failedToLoadRecipe;
        } finally {
            this.loading = false;
        }
    },
};