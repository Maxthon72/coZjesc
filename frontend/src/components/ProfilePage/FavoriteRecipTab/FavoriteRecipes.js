import { getFavoriteRecipeDetails } from "@/services/favoriteRecipyService";

export default {
    name: "FavoriteRecipes",
    data() {
        return {
            favoriteRecipes: [],
            loading: false,
            errorMessage: "",
        };
    },
    methods: {
        async fetchFavoriteRecipes() {
            this.loading = true;
            this.errorMessage = "";
            try {
                this.favoriteRecipes = await getFavoriteRecipeDetails();
            } catch (error) {
                this.errorMessage =
                    error.response.data.detail || "Failed to load favorite recipes.";
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        this.fetchFavoriteRecipes();
    },
};