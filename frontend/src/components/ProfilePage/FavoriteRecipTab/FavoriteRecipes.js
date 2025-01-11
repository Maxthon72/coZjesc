import { getFavoriteRecipes } from "@/services/favoriteRecipyService";

export default {
    name: "FavoriteRecipes",
    data() {
        return {
            favoriteRecipes: [],
            loading: true,
            errorMessage: "",
        };
    },
    async mounted() {
        try {
            this.favoriteRecipes = await getFavoriteRecipes();
        } catch (error) {
            this.errorMessage = "Failed to fetch favorite recipes.";
            console.error(error);
        } finally {
            this.loading = false;
        }
    },
};