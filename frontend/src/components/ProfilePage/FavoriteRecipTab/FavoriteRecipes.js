import { getFavoriteRecipeDetails } from "@/services/favoriteRecipyService";
import { languageStore } from "@/stores/languageStore";

export default {
    name: "FavoriteRecipes",
    data() {
        return {
            favoriteRecipes: [],
            loading: false,
            errorMessage: "",
        };
    },
    computed: {
        translations() {
            return languageStore.translations[languageStore.language];
        },
    },
    methods: {
        async fetchFavoriteRecipes() {
            this.loading = true;
            this.errorMessage = "";
            try {
                this.favoriteRecipes = await getFavoriteRecipeDetails();
            } catch (error) {
                this.errorMessage =
                    error.response.data.detail || this.translations.loadError;
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        this.fetchFavoriteRecipes();
    },
};