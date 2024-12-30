import { getRecipeById } from "@/services/Spoonly";
import {
    getFavoriteRecipes,
    addFavoriteRecipe,
    deleteFavoriteRecipe,
} from "@/services/favoriteRecipyService";
import { checkIfLoggedIn } from "@/services/authService";

export default {
    name: "RecipePage",
    data() {
        return {
            recipe: null,
            loading: true,
            errorMessage: "",
            isFavorite: false,
            isLoggedIn: false,
        };
    },
    methods: {
        cleanText(text) {
            return text.replace(/<\/?b>/g, "").replace(/<\/?a[^>]*>/g, "");
        },
        async checkUserLogin() {
            try {
                await checkIfLoggedIn();
                this.isLoggedIn = true;
            } catch (error) {
                console.error("User is not logged in:", error);
                this.isLoggedIn = false;
            }
        },
        async checkIfFavorite() {
            try {
                if (!this.isLoggedIn) return;

                const favorites = await getFavoriteRecipes();
                this.isFavorite = favorites.some(
                    (favorite) => favorite.recipe_id === this.recipe.id
                );
            } catch (error) {
                console.error("Error checking if recipe is favorite:", error);
            }
        },
        async toggleFavorite() {
            try {
                if (!this.isLoggedIn) {
                    console.warn("User is not logged in. Cannot toggle favorite.");
                    return;
                }

                if (this.isFavorite) {
                    // Remove from favorites
                    const favorites = await getFavoriteRecipes();
                    const favoriteToDelete = favorites.find(
                        (fav) => fav.recipe_id === this.recipe.id
                    );
                    if (favoriteToDelete) {
                        await deleteFavoriteRecipe(favoriteToDelete.id);
                        this.isFavorite = false;
                    }
                } else {
                    // Add to favorites
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
            console.error(error);
            this.errorMessage = "Failed to load recipe information.";
        } finally {
            this.loading = false;
        }
    },
};